var capas_activas = [];

var provincias = new ol.layer.Image({
    title: "Provincias",
    //capa activada por defecto
    visible: true,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'provincias'
        }
    })
});

var baseLayerOSM = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var baseLayerIGN = new ol.layer.Tile({
    title: "Natural Earth Base Map",
    source: new ol.source.TileWMS({
        url: 'http://wms.ign.gob.ar/geoserver/wms',
        params: {
            LAYERS: 'capabaseargenmap',
            VERSION: '1.1.1'
        },
    })
});

var view = new ol.View({
    projection: 'EPSG:3857',
    center: [-7279251.077654, -4861476.466949], //EPSG:3857
    //center: [-59, -27.5], //EPSG:4326
    zoom: 4.5
})

var map = new ol.Map({
    target: 'map',
    layers: [
        baseLayerIGN,
        //baseLayerOSM,
        //listado de capas WMS
        provincias
    ],
    view: view
});


//function que va a realizar la peticion de la consulta
var consultar = async function (coordinate) {
    console.log(coordinate);
    if (coordinate.length == 2) {
        //es un punto [lon,lat]
        var wkt = 'POINT(' + coordinate[0] + ' ' + coordinate[1] + ')';
    } else {
        //es un poligono en la forma [ [ [lon,lat],[lon,lat],....] ]
        var wkt = 'POLYGON((';
        for (var i = 0; i < coordinate[0].length - 1; i++) {
            wkt += coordinate[0][i][0] + ' ' + coordinate[0][i][1] + ',';
        }
        wkt += coordinate[0][0][0] + ' ' + coordinate[0][0][1] + '))'
    }
    //console.log(wkt);
    let data={
        "wkt": wkt,
        "capas_activas":capas_activas
    }
    await axios.post('miconsulta.php',data)
    .then(resp=>{
        resultadoConsulta = resp.data
        mostrarConsulta()
    })
    .catch(e=>{
        console.log(e)
    })

    return;
};


var selectInteraction = new ol.interaction.DragBox({
    condition: ol.events.condition.always, //noModifierKeys
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [0, 0, 255, 1]
        })
    })
});


selectInteraction.on('boxend', function (evt) {
    //this: referencia al selectInteraction
    console.log('boxend', this.getGeometry().getCoordinates());
    var consultaPolygon=this.getGeometry().getCoordinates();
    for (let i = 0; i < consultaPolygon[0].length; i++) {
        consultaPolygon[0][i]=ol.proj.transform(consultaPolygon[0][i], 'EPSG:3857', 'EPSG:4326')
    }
    console.log('epsg:4326', consultaPolygon)
    //consultar(selectInteraction.getGeometry().getCoordinates());
    consultar(consultaPolygon);
});

// //funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click', evt.coordinate);
    console.log('epsg:4326', ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'))
    //consultar(evt.coordinate);
    consultar(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'))
};



//function para "cambiar" de interaction en function del value de los radios
var seleccionarControl = function (el) {
    if (el.value == "consulta") {
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.addInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        map.removeInteraction(polygonDraw)
        //subscribo una funcion al evento click del mapa
        map.on('click', clickEnMapa);

        let optGrafico = document.getElementById("type")
        optGrafico.classList.remove('d-block')
        optGrafico.classList.add('d-none')
    } else if (el.value == "navegacion") {
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        map.removeInteraction(polygonDraw)
        map.on('click',false)
        //remueveo la subscripcion de la funcion al evento click del mapa
        //map.on('click', clickEnMapa);
        let optGrafico = document.getElementById("type")
        optGrafico.classList.remove('d-block')
        optGrafico.classList.add('d-none')
    } else if (el.value == "grafico") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        map.removeInteraction(polygonDraw)
        let optGrafico = document.getElementById("type")
        optGrafico.classList.add('d-block')
        optGrafico.classList.remove('d-none')
    } else if (el.value == "medida") {
        let optGrafico = document.getElementById("type")
        optGrafico.classList.remove('d-block')
        optGrafico.classList.add('d-none')
        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        map.removeInteraction(polygonDraw)
        let optMedida = document.getElementById("typeMeasure")
        optMedida.classList.add('d-block')
        medir()
    }
    //muestro por consola el valor
    console.log(el.value);
};

var tipoDraw = function(t){
    if(t.value == 'punto'){
        map.removeInteraction(lineDraw);
        map.removeInteraction(polygonDraw);
        map.removeInteraction(select)
        map.addInteraction(pointDraw);
        $('#controlesPunto').addClass('d-block')
        $('#controlesPunto').removeClass('d-none')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
    }else if(t.value == 'linea'){
        map.removeInteraction(pointDraw);
        map.removeInteraction(polygonDraw);
        map.addInteraction(lineDraw);
        lineDraw.on('drawend', function(e) {
			generateWktLine();
        });
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesLinea').addClass('d-block')
        $('#controlesLinea').removeClass('d-none')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
    }else if(t.value == 'poligono'){
        map.removeInteraction(pointDraw);
        map.removeInteraction(lineDraw);
        map.addInteraction(polygonDraw);
        polygonDraw.on('drawend', function(e) {
            generateWktPolygon();
        });
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-block')
        $('#controlesPoligono').removeClass('d-none')
    }else if (t.value == "null"){
        map.removeInteraction(pointDraw);
        map.removeInteraction(lineDraw);
        map.removeInteraction(polygonDraw);
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
    }
    console.log(t.value)
};

var tipoMeasure = function(t){
    if(t.value == 'distance'){
        console.log('distancias')
    }else if(t.value == 'area'){
        console.log('area')
    }
}