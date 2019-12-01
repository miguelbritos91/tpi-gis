var red_vial = new ol.layer.Image({
    title: "red_vial",
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
    title: "edif_religiosos",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edif_religiosos'
        }
    })
});
var vias_secundarias = new ol.layer.Image({
    title: "vias_secundarias",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'vias_secundarias'
        }
    })
});

var veg_suelo_desnudo = new ol.layer.Image({
    title: "veg_suelo_desnudo",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'veg_suelo_desnudo'
        }
    })
});

var veg_hidrofila = new ol.layer.Image({
    title: "veg_hidrofila",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'veg_hidrofila'
        }
    })
});

veg_cultivos = new ol.layer.Image({
    title: "veg_cultivos",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'veg_cultivos'
        }
    })
});

veg_arbustiva = new ol.layer.Image({
    title: "veg_arbustiva",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'veg_arbustiva'
        }
    })
});

veg_arborea = new ol.layer.Image({
    title: "veg_arborea",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'veg_arborea'
        }
    })
});

sue_no_consolidado = new ol.layer.Image({
    title: "sue_no_consolidado",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'sue_no_consolidado'
        }
    })
});

sue_hidromorfologico = new ol.layer.Image({
    title: "sue_hidromorfologico",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'sue_hidromorfologico'
        }
    })
});

sue_costero = new ol.layer.Image({
    title: "sue_costero",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'sue_costero'
        }
    })
});

sue_consolidado = new ol.layer.Image({
    title: "sue_consolidado",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'sue_consolidado'
        }
    })
});

sue_congelado = new ol.layer.Image({
    title: "sue_congelado",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'sue_congelado'
        }
    })
});

señalizaciones = new ol.layer.Image({
    title: "señalizaciones",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'señalizaciones'
        }
    })
});


//visibilidad de las capas IGN


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
        map.addLayer(red_vial)
    }else{
        let i = capas_activas.indexOf( 'red_vial' );
        capas_activas.splice( i, 1 );
        map.removeLayer(red_vial)
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

var checkbox2 = document.getElementById('check_layer_2');
checkbox2.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_religiosos.getVisible()) {
        edif_religiosos.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edif_religiosos')
        map.addLayer(edif_religiosos)
    }else{
        let i = capas_activas.indexOf( 'edif_religiosos' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edif_religiosos)
    }
    console.log(capas_activas)
});

edif_religiosos.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox2.checked) {
        checkbox3.checked = visible;
    }
});

var checkbox3 = document.getElementById('check_layer_3');
checkbox3.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== vias_secundarias.getVisible()) {
        vias_secundarias.setVisible(checked);
    }
    if(checked){
        capas_activas.push('vias_secundarias')
        map.addLayer(vias_secundarias)
    }else{
        let i = capas_activas.indexOf( 'vias_secundarias' );
        capas_activas.splice( i, 1 );
        map.removeLayer(vias_secundarias)
    }
    console.log(capas_activas)
});

vias_secundarias.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox3.checked) {
        checkbox3.checked = visible;
    }
});


var checkbox4 = document.getElementById('check_layer_4');
checkbox4.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== veg_suelo_desnudo.getVisible()) {
        veg_suelo_desnudo.setVisible(checked);
    }
    if(checked){
        capas_activas.push('veg_suelo_desnudo')
        map.addLayer(veg_suelo_desnudo)
    }else{
        let i = capas_activas.indexOf( 'veg_suelo_desnudo' );
        capas_activas.splice( i, 1 );
        map.removeLayer(veg_suelo_desnudo)
    }
    console.log(capas_activas)
});

veg_suelo_desnudo.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox4.checked) {
        checkbox4.checked = visible;
    }
});



var checkbox5 = document.getElementById('check_layer_5');
checkbox5.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== veg_hidrofila.getVisible()) {
        veg_hidrofila.setVisible(checked);
    }
    if(checked){
        capas_activas.push('veg_hidrofila')
        map.addLayer(veg_hidrofila)
    }else{
        let i = capas_activas.indexOf( 'veg_hidrofila' );
        capas_activas.splice( i, 1 );
        map.removeLayer(veg_hidrofila)
    }
    console.log(capas_activas)
});

veg_hidrofila.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox5.checked) {
        checkbox5.checked = visible;
    }
});


var checkbox6 = document.getElementById('check_layer_6');
checkbox6.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== veg_cultivos.getVisible()) {
        veg_cultivos.setVisible(checked);
    }
    if(checked){
        capas_activas.push('veg_cultivos')
        map.addLayer(veg_cultivos)
    }else{
        let i = capas_activas.indexOf( 'veg_cultivos' );
        capas_activas.splice( i, 1 );
        map.removeLayer(veg_cultivos)
    }
    console.log(capas_activas)
});

veg_cultivos.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox6.checked) {
        checkbox6.checked = visible;
    }
});

var checkbox7 = document.getElementById('check_layer_7');
checkbox7.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== veg_arbustiva.getVisible()) {
        veg_arbustiva.setVisible(checked);
    }
    if(checked){
        capas_activas.push('veg_arbustiva')
        map.addLayer(veg_arbustiva)
    }else{
        let i = capas_activas.indexOf( 'veg_arbustiva' );
        capas_activas.splice( i, 1 );
        map.removeLayer(veg_arbustiva)
    }
    console.log(capas_activas)
});

veg_arbustiva.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox7.checked) {
        checkbox7.checked = visible;
    }
});

var checkbox8 = document.getElementById('check_layer_8');
checkbox8.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== veg_arborea.getVisible()) {
        veg_arborea.setVisible(checked);
    }
    if(checked){
        capas_activas.push('veg_arborea')
        map.addLayer(veg_arborea)
    }else{
        let i = capas_activas.indexOf( 'veg_arborea' );
        capas_activas.splice( i, 1 );
        map.removeLayer(veg_arborea)
    }
    console.log(capas_activas)
});

veg_arborea.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox8.checked) {
        checkbox8.checked = visible;
    }
});

var checkbox9 = document.getElementById('check_layer_9');
checkbox9.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== sue_no_consolidado.getVisible()) {
        sue_no_consolidado.setVisible(checked);
    }
    if(checked){
        capas_activas.push('sue_no_consolidado')
        map.addLayer(sue_no_consolidado)
    }else{
        let i = capas_activas.indexOf( 'sue_no_consolidado' );
        capas_activas.splice( i, 1 );
        map.removeLayer(sue_no_consolidado)
    }
    console.log(capas_activas)
});

sue_no_consolidado.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox9.checked) {
        checkbox9.checked = visible;
    }
});

var checkbox10 = document.getElementById('check_layer_10');
checkbox10.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== sue_hidromorfologico.getVisible()) {
        sue_hidromorfologico.setVisible(checked);
    }
    if(checked){
        capas_activas.push('sue_hidromorfologico')
        map.addLayer(sue_hidromorfologico)
    }else{
        let i = capas_activas.indexOf( 'sue_hidromorfologico' );
        capas_activas.splice( i, 1 );
        map.removeLayer(sue_hidromorfologico)
    }
    console.log(capas_activas)
});

sue_hidromorfologico.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox10.checked) {
        checkbox10.checked = visible;
    }
});

var checkbox11 = document.getElementById('check_layer_11');
checkbox11.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== sue_costero.getVisible()) {
        sue_costero.setVisible(checked);
    }
    if(checked){
        capas_activas.push('sue_costero')
        map.addLayer(sue_costero)
    }else{
        let i = capas_activas.indexOf( 'sue_costero' );
        capas_activas.splice( i, 1 );
        map.removeLayer(sue_costero)
    }
    console.log(capas_activas)
});

sue_costero.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox11.checked) {
        checkbox11.checked = visible;
    }
});

var checkbox12 = document.getElementById('check_layer_12');
checkbox12.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== sue_consolidado.getVisible()) {
        sue_consolidado.setVisible(checked);
    }
    if(checked){
        capas_activas.push('sue_consolidado')
        map.addLayer(sue_consolidado)
    }else{
        let i = capas_activas.indexOf( 'sue_consolidado' );
        capas_activas.splice( i, 1 );
        map.removeLayer(sue_consolidado)
    }
    console.log(capas_activas)
});

sue_consolidado.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox12.checked) {
        checkbox12.checked = visible;
    }
});


var checkbox13 = document.getElementById('check_layer_13');
checkbox13.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== sue_congelado.getVisible()) {
        sue_congelado.setVisible(checked);
    }
    if(checked){
        capas_activas.push('sue_congelado')
        map.addLayer(sue_congelado)
    }else{
        let i = capas_activas.indexOf( 'sue_congelado' );
        capas_activas.splice( i, 1 );
        map.removeLayer(sue_congelado)
    }
    console.log(capas_activas)
});

sue_congelado.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox13.checked) {
        checkbox13.checked = visible;
    }
});

var checkbox14 = document.getElementById('check_layer_14');
checkbox14.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== señalizaciones.getVisible()) {
        señalizaciones.setVisible(checked);
    }
    if(checked){
        capas_activas.push('señalizaciones')
        map.addLayer(señalizaciones)
    }else{
        let i = capas_activas.indexOf( 'señalizaciones' );
        capas_activas.splice( i, 1 );
        map.removeLayer(señalizaciones)
    }
    console.log(capas_activas)
});

señalizaciones.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox14.checked) {
        checkbox14.checked = visible;
    }
});