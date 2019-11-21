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
}
