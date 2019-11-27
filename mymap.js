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
var red_vial = new ol.layer.Image({
    title: "Red Vial",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'red_vial'
        }
    })
});
var edif_religiosos = new ol.layer.Image({
    title: "Edif Religiosos",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edif_religiosos'
        }
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            title: "Natural Earth Base Map",
            source: new ol.source.TileWMS({
                url: 'http://wms.ign.gob.ar/geoserver/wms',
                params: {
                    LAYERS: 'capabaseargenmap',
                    VERSION: '1.3.0'
                },
            })
        }),
        //listado de capas WMS
        provincias,
        red_vial,
        edif_religiosos,
        //agregi ka caoa vectorial
        //vectorLayer
    ],
    view: new ol.View({
        projection: 'EPSG:3857',
        center: [-7279251.077654, -4461476.466949], //EPSG:3857
        //center: [-59, -27.5], //EPSG:4326
        zoom: 4
    })
});


//function que va a realizar la peticion de la consulta
var consultar = function (coordinate) {
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
    console.log(wkt);
    //window.open('miconsulta.php?wkt=' + wkt+'&capas_activas='+capas_activas+'&nro_capas='+capas_activas.length);

    // jQuery.ajax({
    //     url: 'consulta.php',
    //     method: 'GET',
    //     data: {
    //         wkt: wkt
    //     },
    //     success: function (data) {
    //         console.log(data);
    //     }
    // });

    let data = new FormData()
    data.append("wkt",wkt)
    data.append("capas_activas",capas_activas)
    fetch('miconsulta.php',{
        method: 'POST',
        body: data
    })
    .then(function(res){
        return res.json()
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log(error)
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

//funcion para el evento click en el mapa
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
        endMedir()
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.addInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)

        //subscribo una funcion al evento click del mapa
        map.on('click', clickEnMapa);

        let optMedida = document.getElementById("type")
        optMedida.classList.remove('d-block')
        optMedida.classList.add('d-none')
    } else if (el.value == "navegacion") {
        endMedir()
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        //remueveo la subscripcion de la funcion al evento click del mapa
        //map.on('click', clickEnMapa);
        let optMedida = document.getElementById("type")
        optMedida.classList.remove('d-block')
        optMedida.classList.add('d-none')
    } else if (el.value == "grafico") {
        //la remuevo...
        endMedir()
        map.removeInteraction(selectInteraction);
        var optGrafico = document.getElementById("type")
        optGrafico.classList.add('d-block')
    } else if (el.value == "medida") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        var optMedida = document.getElementById("typeMeasure")
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
        $('#controlesLinea').addClass('d-block')
        $('#controlesLinea').removeClass('d-none')
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
        $('#controlesPoligono').addClass('d-none')
        $('#controlesPoligono').removeClass('d-block')
    }else if(t.value == 'poligono'){
        map.removeInteraction(pointDraw);
        map.removeInteraction(lineDraw);
        map.addInteraction(polygonDraw);
        polygonDraw.on('drawend', function(e) {
            generateWktPolygon();
        });
        $('#controlesPoligono').addClass('d-block')
        $('#controlesPoligono').removeClass('d-none')
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
    }else if (t.value == "null"){
        map.removeInteraction(pointDraw);
        map.removeInteraction(lineDraw);
        map.removeInteraction(polygonDraw);
        $('#controlesLinea').addClass('d-none')
        $('#controlesLinea').removeClass('d-block')
        $('#controlesPunto').addClass('d-none')
        $('#controlesPunto').removeClass('d-block')
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

//visibilidad de las capas


//obtengo una referencia al elemento HTML
var checkbox1 = document.getElementById('check_layer_1');
//agrego un listener al evento change del checkbox
checkbox1.addEventListener('change', function () {
    var checked = this.checked;
    //seteo la propiedad "visible" de mi capa en función al valor
    if (checked !== red_vial.getVisible()) {
        red_vial.setVisible(checked);
    }
    if(checked){
        capas_activas.push('red_vial')
    }else{
        let i = capas_activas.indexOf( 'red_vial' );
        capas_activas.splice( i, 1 );
    }
    console.log(capas_activas)
});

//agrego un listener al evento change de la
//propiedad "visible" de la capa
red_vial.on('change:visible', function () {
    var visible = this.getVisible();
    //seteo el valor del checkbox
    if (visible !== checkbox1.checked) {
        checkbox1.checked = visible;
    }
});


// var checkbox2 = document.getElementById('check_layer_2');
// checkbox2.addEventListener('change', function () {
//     var checked = this.checked;
//     if (checked !== provincias.getVisible()) {
//         provincias.setVisible(checked);
//     }
// });

// provincias.on('change:visible', function () {
//     var visible = this.getVisible();
//     if (visible !== checkbox2.checked) {
//         checkbox2.checked = visible;
//     }
// });

var checkbox3 = document.getElementById('check_layer_3');
checkbox3.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_religiosos.getVisible()) {
        edif_religiosos.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edif_religiosos')
    }else{
        let i = capas_activas.indexOf( 'edif_religiosos' );
        capas_activas.splice( i, 1 );
    }
    console.log(capas_activas)
});

edif_religiosos.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox3.checked) {
        checkbox3.checked = visible;
    }
});

        // var checkbox4 = document.getElementById('check_layer_4');
        // checkbox4.addEventListener('change', function () {
        //     var checked = this.checked;
        //     if (checked !== vectorLayer.getVisible()) {
        //         vectorLayer.setVisible(checked);
        //     }
        // });

        // vectorLayer.on('change:visible', function () {
        //     var visible = this.getVisible();
        //     if (visible !== checkbox4.checked) {
        //         checkbox4.checked = visible;
        //     }
        // });