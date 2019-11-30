var user_point_layer = new ol.layer.Image({
    title: "Puntos Agregados",
    //capa activada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'user_point_layer'
        }
    })
});
map.addLayer(user_point_layer)

var user_linestring_layer = new ol.layer.Image({
    title: "Lineas Agregadas",
    //capa activada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'user_linestring_layer'
        }
    })
});
map.addLayer(user_linestring_layer)

var user_polygon_layer = new ol.layer.Image({
    title: "Poligonos Agregados",
    //capa activada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'user_polygon_layer'
        }
    })
});
map.addLayer(user_polygon_layer)


//visibilidad de las capas de Usuario

var checkbox_user_1 = document.getElementById('check_layer_user_1');
var checkbox_user_2 = document.getElementById('check_layer_user_2');
var checkbox_user_3 = document.getElementById('check_layer_user_3');

// capas de puntos-----------------------------
checkbox_user_1.addEventListener('change', function () {
    var checked = this.checked;
    //seteo la propiedad "visible" de mi capa en función al valor
    if (checked !== user_point_layer.getVisible()) {
        user_point_layer.setVisible(checked);
    }
    if(checked){
        capas_activas.push('user_point_layer')
    }else{
        let i = capas_activas.indexOf( 'user_point_layer' );
        capas_activas.splice( i, 1 );
    }
    console.log(capas_activas)
});

//agrego un listener al evento change de la propiedad "visible" de la capa
user_point_layer.on('change:visible', function () {
    var visible = this.getVisible();
    //seteo el valor del checkbox
    if (visible !== checkbox_user_1.checked) {
        checkbox_user_1.checked = visible;
    }
});


// capas de lineas-----------------------------
checkbox_user_2.addEventListener('change', function () {
    var checked = this.checked;
    //seteo la propiedad "visible" de mi capa en función al valor
    if (checked !== user_linestring_layer.getVisible()) {
        user_linestring_layer.setVisible(checked);
    }
    if(checked){
        capas_activas.push('user_linestring_layer')
    }else{
        let i = capas_activas.indexOf( 'user_linestring_layer' );
        capas_activas.splice( i, 1 );
    }
    console.log(capas_activas)
});

//agrego un listener al evento change de la propiedad "visible" de la capa
user_linestring_layer.on('change:visible', function () {
    var visible = this.getVisible();
    //seteo el valor del checkbox
    if (visible !== checkbox_user_2.checked) {
        checkbox_user_2.checked = visible;
    }
});


// capas de poligonos-----------------------------
checkbox_user_3.addEventListener('change', function () {
    var checked = this.checked;
    //seteo la propiedad "visible" de mi capa en función al valor
    if (checked !== user_polygon_layer.getVisible()) {
        user_polygon_layer.setVisible(checked);
    }
    if(checked){
        capas_activas.push('user_polygon_layer')
    }else{
        let i = capas_activas.indexOf( 'user_polygon_layer' );
        capas_activas.splice( i, 1 );
    }
    console.log(capas_activas)
});

//agrego un listener al evento change de la propiedad "visible" de la capa
user_polygon_layer.on('change:visible', function () {
    var visible = this.getVisible();
    //seteo el valor del checkbox
    if (visible !== checkbox_user_3.checked) {
        checkbox_user_3.checked = visible;
    }
});
