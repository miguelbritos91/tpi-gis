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

function editPoint() {
    console.log('Editar Punto');
    map.removeInteraction(pointDraw);
    map.removeInteraction(erase);
    map.addInteraction(select);
    map.addInteraction(modify);

    select.getFeatures().on('add', function(e) {
        var feature = e.element;
        feature.on('change', function(e) {
            var latLong = e.target.values_.geometry.flatCoordinates;
            console.log(latLong);
            console.log(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:4326' ,'EPSG:4326')));
            $('#wkt').text(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:4326', 'EPSG:4326')));
        });
    });

    return false;
};

function erasePoint() {
    console.log('Borrar Punto');
    map.removeInteraction(pointDraw);
    map.removeInteraction(modify);
    map.addInteraction(select);

    // erase.getFeatures().on('change:length', function(e) {
    //     if(e.target.getArray().length !== 0) {
    //         layer.getSource().removeFeature(e.target.item(0));
    //         generateWkt();
    //     }
    // });

    // return false;
};

pointDraw.on('drawend', function(e){
    var feature = e.feature;
    sourcePoint.clear();
    sourcePoint.addFeature(feature);
    var latLong = feature.getGeometry().getCoordinates();
    console.log(latLong);
    console.log(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:4326' ,'EPSG:4326')));
    $('#wkt').text(ol.coordinate.toStringHDMS(ol.proj.transform(latLong, 'EPSG:4326', 'EPSG:4326')));
});



