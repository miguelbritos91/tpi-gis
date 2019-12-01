var sourcePolygon = new ol.source.Vector();

var layerPolygon = new ol.layer.Vector({
    title: "Multilineas",
    visible: true,
    source: sourcePolygon
});

map.addLayer(layerPolygon);

var select = new ol.interaction.Select();
var erase = new ol.interaction.Select();
var wkt = new ol.format.WKT();

var polygonDraw = new ol.interaction.Draw({
    source: sourcePolygon,
    type: 'Polygon'
});

var modify = new ol.interaction.Modify({
    features: select.getFeatures(),
    deleteCondition: function(event) {
        return ol.events.condition.shiftKeyOnly(event) &&
        ol.events.condition.singleClick(event);
    }
});

function editPolygon() {
    console.log('Editar Poligono');
    map.removeInteraction(polygonDraw);
    map.removeInteraction(erase);
    map.addInteraction(select);
    map.addInteraction(modify);

    select.getFeatures().on('add', function(e) {
        var feature = e.element;
        feature.on('change', function(e) {
            generateWktPolygon();
        });
    });

    return false;
};

function erasePolygon() {
    console.log('Borrar Poligono');
    map.removeInteraction(polygonDraw);
    $(this).addClass('active');
    map.removeInteraction(modify);
    map.addInteraction(select);
    map.addInteraction(erase);

    erase.getFeatures().on('change:length', function(e) {
        if(e.target.getArray().length !== 0) {
            layerPolygon.getSource().removeFeature(e.target.item(0));
            generateWktPolygon();
        }
    });

    return false;
};

function generateWktPolygon() {
    var featureWkt, modifiedWkt;
    var unionFeatures = [];

    layerPolygon.getSource().forEachFeature(function(f) {
        var featureClone = f.clone();
        featureWkt = wkt.writeFeature(featureClone);

        if(featureWkt.match(/MULTIPOLYGON/g)) {
            modifiedWkt = (featureWkt.replace(/MULTIPOLYGON/g, '')).slice(1, -1);
        } else {
            modifiedWkt = (featureWkt.replace(/,/g, ', ')).replace(/POLYGON/g, '');
        }

        unionFeatures.push(modifiedWkt);
    });
    
    layerPolygon.getSource().getFeatures().length ? $('#wkt').text('MULTIPOLYGON(' + unionFeatures + ')') : $('#wkt').text('');
    $('#wkt').addClass('d-block')
    $('#wkt').removeClass('d-none')
}


function guardarPoligono(name,description){
    //console.log('guardar linea')
    let conjuntoPoligono= new ol.Feature();
    let wktPoly = 'MULTIPOLYGON('
    conjuntoPoligono = layerPolygon.getSource().getFeatures();

    for (let i = 0; i < conjuntoPoligono.length; i++) {
        wktPoly +='(('
        //console.log(conjuntoLineas[i].values_['geometry'].flatCoordinates)        
        let coord = conjuntoPoligono[i].values_['geometry'].flatCoordinates
        for (let j = 0; j < coord.length; j=j+2) {
            let coordxy =[coord[j],coord[j+1]]
            coordxy=ol.proj.transform(coordxy,'EPSG:3857','EPSG:4326')
            //console.log(coordxy)
            if((j+2)===coord.length){
                wktPoly += ''+coordxy[0]+' '+coordxy[1]+''
            }else{
                wktPoly += ''+coordxy[0]+' '+coordxy[1]+','
            }
        }
        if((i+1)===conjuntoPoligono.length){
            wktPoly+='))'
        }else{
            wktPoly+=')),'
        }   
    }
    wktPoly+=')'
    console.log(wktPoly)
    let data={
        "name":name,
        "description":description,
        "wkt":wktPoly,
        "type":'polygon'
    }

    axios.post('insert.php',data)
    .then(resp=>{
        console.log(resp.data)
        let response=document.getElementById('response')
        if(!resp.data.error){
            response.innerHTML+=`
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        ${resp.data.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `
            response.classList.add('d-block')
            response.classList.remove('d-none')
        }else{
            response.innerHTML+=`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        ${resp.data.message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                `
            response.classList.add('d-block')
            response.classList.remove('d-none')
        }
    })
    .catch(e=>{
        console.log(e)
    })
}

let btnSaveGeomPoly=document.getElementById('btnSaveGeomPoly')
btnSaveGeomPoly.addEventListener('click',()=>{
    let nameGeomPoly=document.getElementById('nameGeomPoly')
    let descriptionGeomPoly=document.getElementById('descriptionGeomPoly')
    let name=nameGeomPoly.value
    let description=descriptionGeomPoly.value
    guardarPoligono(name,description)
    sourcePolygon.clear()
    nameGeomPoly.value=''
    descriptionGeomPoly.value=''
})