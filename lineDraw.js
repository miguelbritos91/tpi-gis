var sourceline = new ol.source.Vector();

var layerline = new ol.layer.Vector({
    title: "Multilineas",
    visible: true,
    source: sourceline,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#3e64ff',
            width: 3
        }),
    })
});

var select = new ol.interaction.Select();
var erase = new ol.interaction.Select();
var wkt = new ol.format.WKT();

var lineDraw = new ol.interaction.Draw({
    source: sourceline,
    type: 'LineString'
});

var modify = new ol.interaction.Modify({
    features: select.getFeatures(),
    deleteCondition: function(event) {
        return ol.events.condition.shiftKeyOnly(event) &&
        ol.events.condition.singleClick(event);
    }
});

// $('#drawLine').click(function() {
//     clearCustomInteractions();
//     $(this).addClass('active');
//     map.addInteraction(lineDraw);

//     lineDraw.on('drawend', function(e) {
//         generateWkt();
//     });
// });

function editLine() {
    console.log('Editar Linea');
    map.removeInteraction(lineDraw);
    $(this).addClass('active');
    map.removeInteraction(erase);
    map.addInteraction(select);
    map.addInteraction(modify);

    select.getFeatures().on('add', function(e) {
        var feature = e.element;
        feature.on('change', function(e) {
            generateWktLine();
        });
    });

    return false;
};

function eraseLine() {
    console.log('Borrar Linea');
    map.removeInteraction(lineDraw);
    $(this).addClass('active');
    map.removeInteraction(modify);
    map.addInteraction(select);
    map.addInteraction(erase);

    erase.getFeatures().on('change:length', function(e) {
        if(e.target.getArray().length !== 0) {
            layerline.getSource().removeFeature(e.target.item(0));
            generateWktLine();
        }
    });

    return false;
};

map.addLayer(layerline);

function generateWktLine() {
    var featureWkt, modifiedWkt;
    var unionFeatures = [];

    layerline.getSource().forEachFeature(function(f) {
        var featureClone = f.clone();
        featureWkt = wkt.writeFeature(featureClone);

        if(featureWkt.match(/MULTILINESTRING/g)) {
            modifiedWkt = (featureWkt.replace(/MULTILINESTRING/g, '')).slice(1, -1);
        } else {
            modifiedWkt = (featureWkt.replace(/,/g, ', ')).replace(/LINESTRING/g, '');
        }

        unionFeatures.push(modifiedWkt);
    });

    layerline.getSource().getFeatures().length ? $('#wkt').text('MULTILINESTRING(' + unionFeatures + ')') : $('#wkt').text('');
}

function guardarLinea(name,description){
    //console.log('guardar linea')
    let conjuntoLineas= new ol.Feature();
    let wktLine = 'MULTILINESTRING('
    conjuntoLineas = layerline.getSource().getFeatures();
    //console.log(conjuntoLineas)
    for (let i = 0; i < conjuntoLineas.length; i++) {
        wktLine +='('
        //console.log(conjuntoLineas[i].values_['geometry'].flatCoordinates)        
        let coord = conjuntoLineas[i].values_['geometry'].flatCoordinates
        for (let j = 0; j < coord.length; j=j+2) {
            let coordxy =[coord[j],coord[j+1]]
            coordxy=ol.proj.transform(coordxy,'EPSG:3857','EPSG:4326')
            //console.log(coordxy)
            if((j+2)===coord.length){
                wktLine += ''+coordxy[0]+' '+coordxy[1]+''
            }else{
                wktLine += ''+coordxy[0]+' '+coordxy[1]+','
            }
        }
        if((i+1)===conjuntoLineas.length){
            wktLine+=')'
        }else{
            wktLine+='),'
        }   
    }
    wktLine+=')'
    //console.log(wktLine)
    let data={
        "name":name,
        "description":description,
        "wkt":wktLine,
        "type":'line'
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

let btnSaveGeomLine=document.getElementById('btnSaveGeomLine')
btnSaveGeomLine.addEventListener('click',()=>{
    let nameGeomLine=document.getElementById('nameGeomLine')
    let descriptionGeomLine=document.getElementById('descriptionGeomLine')
    let name=nameGeomLine.value
    let description=descriptionGeomLine.value
    guardarLinea(name,description)
    sourceline.clear()
    nameGeomLine.value=''
    descriptionGeomLine.value=''
})