// variables y functiones para que se pueda dibujar un punto

var pointDraw;
var vectorSource = new ol.source.Vector();
var coordenadas = document.getElementById('coordenadas')

var vectorLayer = new ol.layer.Vector({
    title: "Puntos",
    visible: true,
    source: vectorSource
});

map.addLayer(vectorLayer);

pointDraw = new ol.interaction.Draw({
    source: vectorSource,
    type: 'Point'
});

pointDraw.on('drawend', function(e){
    //console.log(e.feature.getGeometry())
    var mifeature = e.feature;
    vectorSource.clear();
    //vectorSource.addFeature(mifeature);
    var latLong = mifeature.getGeometry().getCoordinates();
    console.log(latLong);
    // coordenadas.value = ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:3857' ,'EPSG:4326'));
    //console.log(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:3857' ,'EPSG:4326')))
});



