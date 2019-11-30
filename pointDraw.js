var sourcePoint = new ol.source.Vector();

var layerPoint = new ol.layer.Vector({
    title: "MyLayer",
    visible: true,
    source: sourcePoint
});

map.addLayer(layerPoint);

var select = new ol.interaction.Select();
var erase = new ol.interaction.Select();
var wkt = new ol.format.WKT();

var pointDraw = new ol.interaction.Draw({
    source: sourcePoint,
    type: 'Point'
});

var modify = new ol.interaction.Modify({
    features: select.getFeatures(),
    deleteCondition: function(event) {
        return ol.events.condition.shiftKeyOnly(event) &&
        ol.events.condition.singleClick(event);
    }
});

var pointCoord

pointDraw.on('drawend', function(e){
    var feature = e.feature;
    sourcePoint.clear();
    sourcePoint.addFeature(feature);
    var latLong = feature.getGeometry().getCoordinates();
    pointCoord=ol.proj.transform(latLong,'EPSG:3857','EPSG:4326')
    map.removeInteraction(pointDraw)
    //console.log(pointCoord)
    //console.log(latLong);
    //console.log(ol.proj.transform(latLong,'EPSG:3857','EPSG:4326'))
    //console.log(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:3857' ,'EPSG:4326')));
    $('#wkt').text(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:3857', 'EPSG:4326')));
});

function guardarPunto(name,description){
    //console.log('wkt',pointCoord)
    let wktPoint='POINT('+ pointCoord[0] + ' ' +pointCoord[1]  +')'
    //console.log(wktPoint)

    let data={
        "name":name,
        "description":description,
        "wkt":wktPoint,
        "type":'point'
    }
    console.log(data)
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

    sourcePoint.clear();
    map.addInteraction(pointDraw)
}

let btnSaveGeomPoint=document.getElementById('btnSaveGeomPoint')
btnSaveGeomPoint.addEventListener('click',()=>{
    let nameGeomPoint=document.getElementById('nameGeomPoint')
    let descriptionGeomPoint=document.getElementById('descriptionGeomPoint')
    let name=nameGeomPoint.value
    let description=descriptionGeomPoint.value
    guardarPunto(name,description)
    sourcePoint.clear()
    nameGeomPoint.value=''
    descriptionGeomPoint.value=''
})

