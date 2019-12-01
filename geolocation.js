let btnGeolocation = document.getElementById('geolocation')

let geolocation = new ol.Geolocation({
    trackingOptions: {
        enableHighAccuracy: true
    },
    projection: view.getProjection(),
    tracking: true
})
console.log(geolocation)

var positionFeature = new ol.Feature();

positionFeature.setStyle(new ol.style.Style({
    image: new ol.style.Icon({
        src: 'img/geoPoint.svg'
    })
}));

var geoPoint = new ol.layer.Vector({
    title: 'Mi Posición',
    source: new ol.source.Vector({
        features: [
            positionFeature
        ]
    }),
    visible: true,
})

async function milocation() {
    console.log('mi ubicacion')
    var coordGeoLocation = geolocation.position_
    var position = await ol.proj.transform(coordGeoLocation, 'EPSG:4326', 'EPSG:3857')
    $('#wkt').text(ol.coordinate.toStringHDMS(ol.proj.transform(position, 'EPSG:3857', 'EPSG:4326')));
    positionFeature.setGeometry(new ol.geom.Point(position))
    map.addLayer(geoPoint)
    console.log('Layer Posicion', geoPoint)
    view.setCenter(position)
    view.setResolution(2.388657133911758)
    view.setZoom(7)
    return false
}

btnGeolocation.addEventListener('click', () => {
    milocation()
})