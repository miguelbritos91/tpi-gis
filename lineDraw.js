var sourceline = new ol.source.Vector();

var layerline = new ol.layer.Vector({
    title: "Multilineas",
    visible: true,
    source: sourceline
});

map.addLayer(layerline);

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