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

salvado_de_obstaculo = new ol.layer.Image({
    title: "salvado_de_obstaculo",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'salvado_de_obstaculo'
        }
    })
});

salvado_de_obstaculo = new ol.layer.Image({
    title: "salvado_de_obstaculo",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'salvado_de_obstaculo'
        }
    })
});

red_ferroviaria = new ol.layer.Image({
    title: "red_ferroviaria",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'red_ferroviaria'
        }
    })
});

puntos_del_terreno = new ol.layer.Image({
    title: "puntos_del_terreno",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'puntos_del_terreno'
        }
    })
});

puntos_de_alturas_topograficas = new ol.layer.Image({
    title: "puntos_de_alturas_topograficas",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'puntos_de_alturas_topograficas'
        }
    })
});

puente_red_vial_puntos = new ol.layer.Image({
    title: "puente_red_vial_puntos",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'puente_red_vial_puntos'
        }
    })
});

otras_edificaciones = new ol.layer.Image({
    title: "otras_edificaciones",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'otras_edificaciones'
        }
    })
});

obra_portuaria = new ol.layer.Image({
    title: "obra_portuaria",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'obra_portuaria'
        }
    })
});

obra_de_comunicación = new ol.layer.Image({
    title: "obra_de_comunicación",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'obra_de_comunicación'
        }
    })
});

muro_embalse = new ol.layer.Image({
    title: "muro_embalse",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'muro_embalse'
        }
    })
});

marcas_y_señales = new ol.layer.Image({
    title: "marcas_y_señales",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'marcas_y_señales'
        }
    })
});


líneas_de_conducción_ene = new ol.layer.Image({
    title: "líneas_de_conducción_ene",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'líneas_de_conducción_ene'
        }
    })
});

localidades = new ol.layer.Image({
    title: "localidades",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'localidades'
        }
    })
});

isla = new ol.layer.Image({
    title: "isla",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'isla'
        }
    })
});


infraestructura_hidro = new ol.layer.Image({
    title: "infraestructura_hidro",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'infraestructura_hidro'
        }
    })
});

infraestructura_aeroportuaria_punto = new ol.layer.Image({
    title: "infraestructura_aeroportuaria_punto",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'infraestructura_aeroportuaria_punto'
        }
    })
});

estructuras_portuarias = new ol.layer.Image({
    title: "estructuras_portuarias",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'estructuras_portuarias'
        }
    })
});

espejo_de_agua_hid = new ol.layer.Image({
    title: "espejo_de_agua_hid",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'espejo_de_agua_hid'
        }
    })
});

ejido = new ol.layer.Image({
    title: "ejido",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'ejido'
        }
    })
});

edificios_ferroviarios = new ol.layer.Image({
    title: "edificios_ferroviarios",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edificios_ferroviarios'
        }
    })
});

edificio_publico_ips = new ol.layer.Image({
    title: "edificio_publico_ips",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edificio_publico_ips'
        }
    })
});

edificio_de_seguridad_ips = new ol.layer.Image({
    title: "edificio_de_seguridad_ips",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edificio_de_seguridad_ips'
        }
    })
});

edificio_de_salud_ips = new ol.layer.Image({
    title: "edificio_de_salud_ips",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edificio_de_salud_ips'
        }
    })
});

edif_educacion = new ol.layer.Image({
    title: "edif_educacion",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edif_educacion'
        }
    })
});

edif_depor_y_esparcimiento = new ol.layer.Image({
    title: "edif_depor_y_esparcimiento",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edif_depor_y_esparcimiento'
        }
    })
});

edif_construcciones_turisticas = new ol.layer.Image({
    title: "edif_construcciones_turisticas",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'edif_construcciones_turisticas'
        }
    })
});

curvas_de_nivel = new ol.layer.Image({
    title: "curvas_de_nivel",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'curvas_de_nivel'
        }
    })
});

curso_de_agua_hid = new ol.layer.Image({
    title: "curso_de_agua_hid",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'curso_de_agua_hid'
        }
    })
});

complejo_de_energia_ene = new ol.layer.Image({
    title: "complejo_de_energia_ene",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'complejo_de_energia_ene'
        }
    })
});

actividades_economicas = new ol.layer.Image({
    title: "actividades_economicas",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'actividades_economicas'
        }
    })
});

actividades_agropecuarias = new ol.layer.Image({
    title: "actividades_agropecuarias",
    //capa desactivada por defecto
    visible: false,
    source: new ol.source.ImageWMS({
        url: URL_OGC,
        params: {
            LAYERS: 'actividades_agropecuarias'
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


var checkbox15 = document.getElementById('check_layer_15');
checkbox15.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== salvado_de_obstaculo.getVisible()) {
        salvado_de_obstaculo.setVisible(checked);
    }
    if(checked){
        capas_activas.push('salvado_de_obstaculo')
        map.addLayer(salvado_de_obstaculo)
    }else{
        let i = capas_activas.indexOf( 'salvado_de_obstaculo' );
        capas_activas.splice( i, 1 );
        map.removeLayer(salvado_de_obstaculo)
    }
    console.log(capas_activas)
});

salvado_de_obstaculo.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox15.checked) {
        checkbox15.checked = visible;
    }
});


var checkbox16 = document.getElementById('check_layer_16');
checkbox16.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== red_ferroviaria.getVisible()) {
        red_ferroviaria.setVisible(checked);
    }
    if(checked){
        capas_activas.push('red_ferroviaria')
        map.addLayer(red_ferroviaria)
    }else{
        let i = capas_activas.indexOf( 'red_ferroviaria' );
        capas_activas.splice( i, 1 );
        map.removeLayer(red_ferroviaria)
    }
    console.log(capas_activas)
});

red_ferroviaria.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox16.checked) {
        checkbox16.checked = visible;
    }
});

var checkbox17 = document.getElementById('check_layer_17');
checkbox17.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== puntos_del_terreno.getVisible()) {
        puntos_del_terreno.setVisible(checked);
    }
    if(checked){
        capas_activas.push('puntos_del_terreno')
        map.addLayer(puntos_del_terreno)
    }else{
        let i = capas_activas.indexOf( 'puntos_del_terreno' );
        capas_activas.splice( i, 1 );
        map.removeLayer(puntos_del_terreno)
    }
    console.log(capas_activas)
});

puntos_del_terreno.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox17.checked) {
        checkbox17.checked = visible;
    }
});

var checkbox18 = document.getElementById('check_layer_18');
checkbox18.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== puntos_de_alturas_topograficas.getVisible()) {
        puntos_de_alturas_topograficas.setVisible(checked);
    }
    if(checked){
        capas_activas.push('puntos_de_alturas_topograficas')
        map.addLayer(puntos_de_alturas_topograficas)
    }else{
        let i = capas_activas.indexOf( 'puntos_de_alturas_topograficas' );
        capas_activas.splice( i, 1 );
        map.removeLayer(puntos_de_alturas_topograficas)
    }
    console.log(capas_activas)
});

puntos_de_alturas_topograficas.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox18.checked) {
        checkbox18.checked = visible;
    }
});


var checkbox19 = document.getElementById('check_layer_19');
checkbox19.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== puente_red_vial_puntos.getVisible()) {
        puente_red_vial_puntos.setVisible(checked);
    }
    if(checked){
        capas_activas.push('puente_red_vial_puntos')
        map.addLayer(puente_red_vial_puntos)
    }else{
        let i = capas_activas.indexOf( 'puente_red_vial_puntos' );
        capas_activas.splice( i, 1 );
        map.removeLayer(puente_red_vial_puntos)
    }
    console.log(capas_activas)
});

puente_red_vial_puntos.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox19.checked) {
        checkbox19.checked = visible;
    }
});


var checkbox20 = document.getElementById('check_layer_20');
checkbox20.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== otras_edificaciones.getVisible()) {
        otras_edificaciones.setVisible(checked);
    }
    if(checked){
        capas_activas.push('otras_edificaciones')
        map.addLayer(otras_edificaciones)
    }else{
        let i = capas_activas.indexOf( 'otras_edificaciones' );
        capas_activas.splice( i, 1 );
        map.removeLayer(otras_edificaciones)
    }
    console.log(capas_activas)
});

otras_edificaciones.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox20.checked) {
        checkbox20.checked = visible;
    }
});

var checkbox21 = document.getElementById('check_layer_21');
checkbox21.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== obra_portuaria.getVisible()) {
        obra_portuaria.setVisible(checked);
    }
    if(checked){
        capas_activas.push('obra_portuaria')
        map.addLayer(obra_portuaria)
    }else{
        let i = capas_activas.indexOf( 'obra_portuaria' );
        capas_activas.splice( i, 1 );
        map.removeLayer(obra_portuaria)
    }
    console.log(capas_activas)
});

obra_portuaria.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox21.checked) {
        checkbox21.checked = visible;
    }
});

var checkbox22 = document.getElementById('check_layer_22');
checkbox22.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== obra_de_comunicación.getVisible()) {
        obra_de_comunicación.setVisible(checked);
    }
    if(checked){
        capas_activas.push('obra_de_comunicación')
        map.addLayer(obra_de_comunicación)
    }else{
        let i = capas_activas.indexOf( 'obra_de_comunicación' );
        capas_activas.splice( i, 1 );
        map.removeLayer(obra_de_comunicación)
    }
    console.log(capas_activas)
});

obra_de_comunicación.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox22.checked) {
        checkbox22.checked = visible;
    }
});

var checkbox23 = document.getElementById('check_layer_23');
checkbox23.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== muro_embalse.getVisible()) {
        muro_embalse.setVisible(checked);
    }
    if(checked){
        capas_activas.push('muro_embalse')
        map.addLayer(muro_embalse)
    }else{
        let i = capas_activas.indexOf( 'muro_embalse' );
        capas_activas.splice( i, 1 );
        map.removeLayer(muro_embalse)
    }
    console.log(capas_activas)
});

muro_embalse.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox23.checked) {
        checkbox23.checked = visible;
    }
});

var checkbox24 = document.getElementById('check_layer_24');
checkbox24.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== marcas_y_señales.getVisible()) {
        marcas_y_señales.setVisible(checked);
    }
    if(checked){
        capas_activas.push('marcas_y_señales')
        map.addLayer(marcas_y_señales)
    }else{
        let i = capas_activas.indexOf( 'marcas_y_señales' );
        capas_activas.splice( i, 1 );
        map.removeLayer(marcas_y_señales)
    }
    console.log(capas_activas)
});

marcas_y_señales.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox24.checked) {
        checkbox24.checked = visible;
    }
});

var checkbox25 = document.getElementById('check_layer_25');
checkbox25.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== líneas_de_conducción_ene.getVisible()) {
        líneas_de_conducción_ene.setVisible(checked);
    }
    if(checked){
        capas_activas.push('líneas_de_conducción_ene')
        map.addLayer(líneas_de_conducción_ene)
    }else{
        let i = capas_activas.indexOf( 'líneas_de_conducción_ene' );
        capas_activas.splice( i, 1 );
        map.removeLayer(líneas_de_conducción_ene)
    }
    console.log(capas_activas)
});

líneas_de_conducción_ene.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox25.checked) {
        checkbox25.checked = visible;
    }
});

var checkbox26 = document.getElementById('check_layer_26');
checkbox26.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== localidades.getVisible()) {
        localidades.setVisible(checked);
    }
    if(checked){
        capas_activas.push('localidades')
        map.addLayer(localidades)
    }else{
        let i = capas_activas.indexOf( 'localidades' );
        capas_activas.splice( i, 1 );
        map.removeLayer(localidades)
    }
    console.log(capas_activas)
});

localidades.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox26.checked) {
        checkbox26.checked = visible;
    }
});

var checkbox27 = document.getElementById('check_layer_27');
checkbox27.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== isla.getVisible()) {
        isla.setVisible(checked);
    }
    if(checked){
        capas_activas.push('isla')
        map.addLayer(isla)
    }else{
        let i = capas_activas.indexOf( 'isla' );
        capas_activas.splice( i, 1 );
        map.removeLayer(isla)
    }
    console.log(capas_activas)
});

isla.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox27.checked) {
        checkbox27.checked = visible;
    }
});

var checkbox28 = document.getElementById('check_layer_28');
checkbox28.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== infraestructura_hidro.getVisible()) {
        infraestructura_hidro.setVisible(checked);
    }
    if(checked){
        capas_activas.push('infraestructura_hidro')
        map.addLayer(infraestructura_hidro)
    }else{
        let i = capas_activas.indexOf( 'infraestructura_hidro' );
        capas_activas.splice( i, 1 );
        map.removeLayer(infraestructura_hidro)
    }
    console.log(capas_activas)
});

infraestructura_hidro.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox28.checked) {
        checkbox28.checked = visible;
    }
});

var checkbox29 = document.getElementById('check_layer_29');
checkbox29.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== infraestructura_aeroportuaria_punto.getVisible()) {
        infraestructura_aeroportuaria_punto.setVisible(checked);
    }
    if(checked){
        capas_activas.push('infraestructura_aeroportuaria_punto')
        map.addLayer(infraestructura_aeroportuaria_punto)
    }else{
        let i = capas_activas.indexOf( 'infraestructura_aeroportuaria_punto' );
        capas_activas.splice( i, 1 );
        map.removeLayer(infraestructura_aeroportuaria_punto)
    }
    console.log(capas_activas)
});

infraestructura_aeroportuaria_punto.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox29.checked) {
        checkbox29.checked = visible;
    }
});

var checkbox30 = document.getElementById('check_layer_30');
checkbox30.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== estructuras_portuarias.getVisible()) {
        estructuras_portuarias.setVisible(checked);
    }
    if(checked){
        capas_activas.push('estructuras_portuarias')
        map.addLayer(estructuras_portuarias)
    }else{
        let i = capas_activas.indexOf( 'estructuras_portuarias' );
        capas_activas.splice( i, 1 );
        map.removeLayer(estructuras_portuarias)
    }
    console.log(capas_activas)
});

estructuras_portuarias.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox30.checked) {
        checkbox30.checked = visible;
    }
});

var checkbox31 = document.getElementById('check_layer_31');
checkbox31.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== espejo_de_agua_hid.getVisible()) {
        espejo_de_agua_hid.setVisible(checked);
    }
    if(checked){
        capas_activas.push('espejo_de_agua_hid')
        map.addLayer(espejo_de_agua_hid)
    }else{
        let i = capas_activas.indexOf( 'espejo_de_agua_hid' );
        capas_activas.splice( i, 1 );
        map.removeLayer(espejo_de_agua_hid)
    }
    console.log(capas_activas)
});

espejo_de_agua_hid.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox31.checked) {
        checkbox31.checked = visible;
    }
});

var checkbox32 = document.getElementById('check_layer_32');
checkbox32.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== ejido.getVisible()) {
        ejido.setVisible(checked);
    }
    if(checked){
        capas_activas.push('ejido')
        map.addLayer(ejido)
    }else{
        let i = capas_activas.indexOf( 'ejido' );
        capas_activas.splice( i, 1 );
        map.removeLayer(ejido)
    }
    console.log(capas_activas)
});

ejido.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox32.checked) {
        checkbox32.checked = visible;
    }
});

var checkbox33 = document.getElementById('check_layer_33');
checkbox33.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edificios_ferroviarios.getVisible()) {
        edificios_ferroviarios.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edificios_ferroviarios')
        map.addLayer(edificios_ferroviarios)
    }else{
        let i = capas_activas.indexOf( 'edificios_ferroviarios' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edificios_ferroviarios)
    }
    console.log(capas_activas)
});

edificios_ferroviarios.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox33.checked) {
        checkbox33.checked = visible;
    }
});

var checkbox34 = document.getElementById('check_layer_34');
checkbox34.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edificio_publico_ips.getVisible()) {
        edificio_publico_ips.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edificio_publico_ips')
        map.addLayer(edificio_publico_ips)
    }else{
        let i = capas_activas.indexOf( 'edificio_publico_ips' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edificio_publico_ips)
    }
    console.log(capas_activas)
});

edificio_publico_ips.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox34.checked) {
        checkbox34.checked = visible;
    }
});

var checkbox35 = document.getElementById('check_layer_35');
checkbox35.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edificio_de_seguridad_ips.getVisible()) {
        edificio_de_seguridad_ips.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edificio_de_seguridad_ips')
        map.addLayer(edificio_de_seguridad_ips)
    }else{
        let i = capas_activas.indexOf( 'edificio_de_seguridad_ips' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edificio_de_seguridad_ips)
    }
    console.log(capas_activas)
});

edificio_de_seguridad_ips.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox35.checked) {
        checkbox35.checked = visible;
    }
});

var checkbox36 = document.getElementById('check_layer_36');
checkbox36.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edificio_de_salud_ips.getVisible()) {
        edificio_de_salud_ips.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edificio_de_salud_ips')
        map.addLayer(edificio_de_salud_ips)
    }else{
        let i = capas_activas.indexOf( 'edificio_de_salud_ips' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edificio_de_salud_ips)
    }
    console.log(capas_activas)
});

edificio_de_salud_ips.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox36.checked) {
        checkbox36.checked = visible;
    }
});

var checkbox37 = document.getElementById('check_layer_37');
checkbox37.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_educacion.getVisible()) {
        edif_educacion.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edif_educacion')
        map.addLayer(edif_educacion)
    }else{
        let i = capas_activas.indexOf( 'edif_educacion' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edif_educacion)
    }
    console.log(capas_activas)
});

edif_educacion.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox37.checked) {
        checkbox37.checked = visible;
    }
});

var checkbox38 = document.getElementById('check_layer_38');
checkbox38.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_depor_y_esparcimiento.getVisible()) {
        edif_depor_y_esparcimiento.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edif_depor_y_esparcimiento')
        map.addLayer(edif_depor_y_esparcimiento)
    }else{
        let i = capas_activas.indexOf( 'edif_depor_y_esparcimiento' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edif_depor_y_esparcimiento)
    }
    console.log(capas_activas)
});

edif_depor_y_esparcimiento.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox38.checked) {
        checkbox38.checked = visible;
    }
});

var checkbox39 = document.getElementById('check_layer_39');
checkbox39.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== edif_construcciones_turisticas.getVisible()) {
        edif_construcciones_turisticas.setVisible(checked);
    }
    if(checked){
        capas_activas.push('edif_construcciones_turisticas')
        map.addLayer(edif_construcciones_turisticas)
    }else{
        let i = capas_activas.indexOf( 'edif_construcciones_turisticas' );
        capas_activas.splice( i, 1 );
        map.removeLayer(edif_construcciones_turisticas)
    }
    console.log(capas_activas)
});

edif_construcciones_turisticas.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox39.checked) {
        checkbox39.checked = visible;
    }
});

var checkbox40 = document.getElementById('check_layer_40');
checkbox40.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== curvas_de_nivel.getVisible()) {
        curvas_de_nivel.setVisible(checked);
    }
    if(checked){
        capas_activas.push('curvas_de_nivel')
        map.addLayer(curvas_de_nivel)
    }else{
        let i = capas_activas.indexOf( 'curvas_de_nivel' );
        capas_activas.splice( i, 1 );
        map.removeLayer(curvas_de_nivel)
    }
    console.log(capas_activas)
});

curvas_de_nivel.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox40.checked) {
        checkbox40.checked = visible;
    }
});

var checkbox41 = document.getElementById('check_layer_41');
checkbox41.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== curso_de_agua_hid.getVisible()) {
        curso_de_agua_hid.setVisible(checked);
    }
    if(checked){
        capas_activas.push('curso_de_agua_hid')
        map.addLayer(curso_de_agua_hid)
    }else{
        let i = capas_activas.indexOf( 'curso_de_agua_hid' );
        capas_activas.splice( i, 1 );
        map.removeLayer(curso_de_agua_hid)
    }
    console.log(capas_activas)
});

curso_de_agua_hid.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox41.checked) {
        checkbox41.checked = visible;
    }
});

var checkbox42 = document.getElementById('check_layer_42');
checkbox42.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== complejo_de_energia_ene.getVisible()) {
        complejo_de_energia_ene.setVisible(checked);
    }
    if(checked){
        capas_activas.push('complejo_de_energia_ene')
        map.addLayer(complejo_de_energia_ene)
    }else{
        let i = capas_activas.indexOf( 'complejo_de_energia_ene' );
        capas_activas.splice( i, 1 );
        map.removeLayer(complejo_de_energia_ene)
    }
    console.log(capas_activas)
});

complejo_de_energia_ene.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox42.checked) {
        checkbox42.checked = visible;
    }
});

var checkbox43 = document.getElementById('check_layer_43');
checkbox43.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== actividades_economicas.getVisible()) {
        actividades_economicas.setVisible(checked);
    }
    if(checked){
        capas_activas.push('actividades_economicas')
        map.addLayer(actividades_economicas)
    }else{
        let i = capas_activas.indexOf( 'actividades_economicas' );
        capas_activas.splice( i, 1 );
        map.removeLayer(actividades_economicas)
    }
    console.log(capas_activas)
});

actividades_economicas.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox43.checked) {
        checkbox43.checked = visible;
    }
});

var checkbox44 = document.getElementById('check_layer_44');
checkbox44.addEventListener('change', function () {
    var checked = this.checked;
    if (checked !== actividades_agropecuarias.getVisible()) {
        actividades_agropecuarias.setVisible(checked);
    }
    if(checked){
        capas_activas.push('actividades_agropecuarias')
        map.addLayer(actividades_agropecuarias)
    }else{
        let i = capas_activas.indexOf( 'actividades_agropecuarias' );
        capas_activas.splice( i, 1 );
        map.removeLayer(actividades_agropecuarias)
    }
    console.log(capas_activas)
});

actividades_agropecuarias.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox44.checked) {
        checkbox44.checked = visible;
    }
});