var source = new ol.source.Vector();

var layer = new ol.layer.Vector({
    source: source
});

var erase = new ol.interaction.Select();
	var wkt = new ol.format.WKT();

var lineDraw = new ol.interaction.Draw({
    source: source,
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

$('#editLine').click(function() {
    clearCustomInteractions();
    $(this).addClass('active');
    map.addInteraction(select);
    map.addInteraction(modify);

    select.getFeatures().on('add', function(e) {
        var feature = e.element;
        feature.on('change', function(e) {
            generateWkt();
        });
    });

    return false;
});

$('#eraseLine').click(function() {
    clearCustomInteractions();
    $(this).addClass('active');
    map.addInteraction(erase);

    erase.getFeatures().on('change:length', function(e) {
        if(e.target.getArray().length !== 0) {
            layer.getSource().removeFeature(e.target.item(0));
            generateWkt();
        }
    });

    return false;
});

map.addLayer(layer);

function clearCustomInteractions() {
    // $('#bar').find('p').removeClass('active');
    map.removeInteraction(lineDraw);
}

function generateWkt() {
    var featureWkt, modifiedWkt;
    var unionFeatures = [];

    layer.getSource().forEachFeature(function(f) {
        var featureClone = f.clone();
        featureWkt = wkt.writeFeature(featureClone);

        if(featureWkt.match(/MULTILINESTRING/g)) {
            modifiedWkt = (featureWkt.replace(/MULTILINESTRING/g, '')).slice(1, -1);
        } else {
            modifiedWkt = (featureWkt.replace(/,/g, ', ')).replace(/LINESTRING/g, '');
        }

        unionFeatures.push(modifiedWkt);
    });

    layer.getSource().getFeatures().length ? $('#wkt').text('MULTILINESTRING(' + unionFeatures + ')') : $('#wkt').text('');
}
