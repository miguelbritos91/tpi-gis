let resultadoConsulta = []
let respConsulta = document.getElementById('respConsulta')
let bodyConsulta = document.getElementById('bodyConsulta')
let cerrarConsulta = document.getElementById('cerrarConsulta')
let panel = document.getElementById('panel')
function mostrarConsulta(){
    bodyConsulta.innerHTML=''
    if(resultadoConsulta.length === 0){
        // ocultamos los resultados de la consulta
        respConsulta.classList.remove('d-block')
        respConsulta.classList.add('d-none')
        // mostramos el panel de trabajo
        panel.classList.remove('d-none')
        panel.classList.add('d-block')
    }else{
        // mostramos el resultado de la consulta
        respConsulta.classList.remove('d-none')
        respConsulta.classList.add('d-block')
        // ocultamos el panel de trabajo para visualizar la consulta
        panel.classList.remove('d-block')
        panel.classList.add('d-none')
        
        // cabecera pestañas de resultados
        let pestañas = `<li class="nav-item">
                            <a class="nav-link active" id="${resultadoConsulta[0].capa}-tab" data-toggle="tab" href="#${resultadoConsulta[0].capa}" role="tab" aria-controls="${resultadoConsulta[0].capa}" aria-selected="true">${resultadoConsulta[0].capa}</a>
                        </li>`

        // tablas de registros por capas
        // -----------------------------
        // cabecera de tabla
        let cabeceraTabla=[]
        let nombreCampo=[]
        let cuerpoRegistro=``
        for (let i = 0; i < Object.keys(resultadoConsulta[0].registros[0]).length; i++) {
            cabeceraTabla+=`<th>${Object.keys(resultadoConsulta[0].registros[0])[i]}</th>`
            nombreCampo[i] = Object.keys(resultadoConsulta[0].registros[0])[i]
        }
        //cuerpo de los registros de tablas
        
        for (let i = 0; i < resultadoConsulta[0].registros.length; i++) {
            cuerpoRegistro+=`<tr>`
            for (let j = 0; j < nombreCampo.length; j++) {
                cuerpoRegistro+=`<td>${resultadoConsulta[0].registros[i][nombreCampo[j]]}</td>`
            }
            cuerpoRegistro+=`</tr>`
        }
        
        let tablasConsulta=[]

        tablasConsulta[0] = `<table class="table table-responsive table-striped table-bordered">
                                    <thead class="thead-dark">
                                        <tr>
                                            ${cabeceraTabla}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${cuerpoRegistro}
                                    </tbody>
                                </table>`


        // bucle que recorre el resto de las capas
        for (let i = 1; i < resultadoConsulta.length; i++) {
            pestañas +=`<li class="nav-item">
                            <a class="nav-link" id="${resultadoConsulta[i].capa}-tab" data-toggle="tab" href="#${resultadoConsulta[i].capa}" role="tab" aria-controls="${resultadoConsulta[i].capa}" aria-selected="true">${resultadoConsulta[i].capa}</a>
                        </li>`

            // tablas de registros por capas (recorremos con el bucle de capas)
            // -----------------------------
            // cabecera de tabla
            cabeceraTabla=[]
            nombreCampo=[]
            cuerpoRegistro=``
            for (let j = 0; j < Object.keys(resultadoConsulta[i].registros[0]).length; j++) {
                cabeceraTabla+=`<th>${Object.keys(resultadoConsulta[i].registros[0])[j]}</th>`
                nombreCampo[j] = Object.keys(resultadoConsulta[i].registros[0])[j]
            }
            //cuerpo de los registros de tablas
            
            for (let k = 0; k < resultadoConsulta[i].registros.length; k++) {
                cuerpoRegistro+=`<tr>`
                for (let j = 0; j < nombreCampo.length; j++) {
                    cuerpoRegistro+=`<td>${resultadoConsulta[i].registros[k][nombreCampo[j]]}</td>`
                }
                cuerpoRegistro+=`</tr>`
            }

            tablasConsulta[i] = `<table class="table table-responsive table-striped table-bordered">
                                        <thead class="thead-dark">
                                            <tr>
                                                ${cabeceraTabla}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${cuerpoRegistro}
                                        </tbody>
                                    </table>`
        }

        // contenedores de las tablas resultado
        contenidoConsulta=`<div class="tab-pane fade show active" id="${resultadoConsulta[0].capa}" role="tabpanel" aria-labelledby="${resultadoConsulta[0].capa}-tab">
                            <h3>${resultadoConsulta[0].capa}</h3>
                            ${tablasConsulta[0]}
                        </div>`
        for (let i = 1; i < resultadoConsulta.length; i++) {
            contenidoConsulta +=`<div class="tab-pane fade show" id="${resultadoConsulta[i].capa}" role="tabpanel" aria-labelledby="${resultadoConsulta[i].capa}-tab">
                            <h3>${resultadoConsulta[i].capa}</h3>
                            ${tablasConsulta[i]}
                        </div>`
        }            
        bodyConsulta.innerHTML=`
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                ${pestañas}
            </ul>
            <div class="tab-content" id="myTabContent">
                ${contenidoConsulta}
            </div>
        `
    }
}

cerrarConsulta.addEventListener('click',()=>{
    resultadoConsulta=[]
    bodyConsulta.innerHTML=''
    mostrarConsulta()
})