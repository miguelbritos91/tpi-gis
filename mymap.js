var pais_lim = new ol.layer.Image({
    title: "Provincias",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'pais_lim'
        }
    })
});
var provincias = new ol.layer.Image({
    title: "Provincias",
    //capa desactivada por defecto
    visible: false,
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
                    VERSION: '1.1.1'
                }
            })
        }),
        //listado de capas WMS
        pais_lim,
        provincias,
        red_vial,
        edif_religiosos,
        //agregi ka caoa vectorial
        //vectorLayer

    ],
    view: new ol.View({
        projection: 'EPSG:4326',
        center: [-59, -27.5],
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
    // window.open('consulta.php?wkt=' + wkt);
    return;

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
    consultar(selectInteraction.getGeometry().getCoordinates());

});

//funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click', evt.coordinate);
    consultar(evt.coordinate);
};



//function para "cambiar" de interaction en function del value de los radios
var seleccionarControl = function (el) {
    if (el.value == "consulta") {
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
        //la remuevo...
        map.removeInteraction(selectInteraction);
        map.removeInteraction(pointDraw)
        map.removeInteraction(lineDraw)
        //remueveo la subscripcion de la funcion al evento click del mapa
        //map.on('click', clickEnMapa);
        let optMedida = document.getElementById("type")
        optMedida.classList.remove('d-block')
        optMedida.classList.add('d-none')
    } else if (el.value == "medida") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        var optMedida = document.getElementById("type")
        optMedida.classList.add('d-block')
    }
    //muestro por consola el valor
    console.log(el.value);
};

var tipoDraw = function(t){
    if(t.value == 'punto'){
        map.removeInteraction(lineDraw);
        map.addInteraction(pointDraw);
    }else if(t.value == 'linea'){
        map.removeInteraction(pointDraw);
        clearCustomInteractions();
        map.addInteraction(lineDraw);
        lineDraw.on('drawend', function(e) {
			generateWkt();
		});
    }
    console.log(t.value)
};

//visibilidad de las capas

//pais_lim.setVisible(1);

//obtengo una referencia al elemento HTML
var checkbox1 = document.getElementById('check_layer_1');
//agrego un listener al evento change del checkbox
checkbox1.addEventListener('change', function () {
    var checked = this.checked;
    //seteo la propiedad "visible" de mi capa en función al valor
    if (checked !== red_vial.getVisible()) {
        red_vial.setVisible(checked);
    }
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


var checkbox2 = document.getElementById('check_layer_2');
checkbox2.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== provincias.getVisible()) {
        provincias.setVisible(checked);
    }
});

provincias.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox2.checked) {
        checkbox2.checked = visible;
    }
});

var checkbox3 = document.getElementById('check_layer_3');
checkbox3.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_religiosos.getVisible()) {
        edif_religiosos.setVisible(checked);
    }
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