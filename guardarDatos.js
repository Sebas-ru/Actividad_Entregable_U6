var datosIngresadosDoctores = []; //Se crea este arreglo vacio para guardar cada registro que se haga en el formulario de infoDoctores 

function guardarDatos(nombreEspecialista, apellidoEspecialista, numeroCedula, opcionesEspecialidad, numeroConsultorio, emailEspecialista){

    const infoDoctores = { //Se crea para guardar los datos ingresados del formulario en el objeto infoDoctores y convertirlos a formato JSON
        nombreDoc : nombreEspecialista,
        apellidoDoc : apellidoEspecialista,
        numCedDoc : numeroCedula,
        listaEspDoc : opcionesEspecialidad,
        numConsultorio : numeroConsultorio,
        emailDoc : emailEspecialista
    }
    //console.log(infoDoctores)   
    
    datosIngresadosDoctores.push(infoDoctores);
    
    const jsonDatosDoctores = JSON.stringify(infoDoctores)
    
    //Crear ub blob 
    const blob = new Blob([jsonDatosDoctores], {type:"application/json"})
    //Crear una URL para el objeto blob
    const url = URL.createObjectURL(blob)
    //Crear enlace de descarga 
    const descarga = document.getElementById("descarga")
    const enlaceDescarga = document.createElement("a")
    enlaceDescarga.href = url
    enlaceDescarga.download = "especialistas.json"
    enlaceDescarga.textContent = "Descargar archivo JSON de doctores especialistas"
    descarga.appendChild(enlaceDescarga)
    
    
    console.log("Este es el JSON", jsonDatosDoctores);

    infoDoctoresTabla();
}

function infoDoctoresTabla(){ //Esta función permite mostrar la información que se registra en el formulario en la tabla creada para ese fin
    const tablaInformacion = document.getElementById("tablaInfoDoc")
    const cuerpoTabla = tablaInformacion.querySelector("tbody")
    tablaInformacion.innerHTML = "<thead><tr><th>Nombre</th><th>Apellido</th><th>Número de cédula</th><th>Especialidad</th><th>Consultorio</th><th>Correo de contacto</th></tr></thead>"

    datosIngresadosDoctores.forEach((infoDoctores) => {
        //Crea la fila de cada usuario que se vaya registrando
        const filaInfoDoc = tablaInformacion.insertRow(-1)

        //Crear los campos en su respectiva columna
        const nombreDocTabla = document.createElement("td")
        const apellidoDocTabla = document.createElement("td")
        const numCedulaDocTabla = document.createElement("td")
        const especialidadSelec = document.createElement("td")
        const numeroConsulTabla = document.createElement("td")
        const emailTabla = document.createElement("td")

        //Relacionar los campos a cada registro del objeto que contiene la información
        nombreDocTabla.textContent = infoDoctores.nombreDoc
        apellidoDocTabla.textContent = infoDoctores.apellidoDoc
        numCedulaDocTabla.textContent = infoDoctores.numCedDoc
        especialidadSelec.textContent = infoDoctores.listaEspDoc
        numeroConsulTabla.textContent = infoDoctores.numConsultorio
        emailTabla.textContent = infoDoctores.emailDoc

        //Agregar los campos a la fila
        filaInfoDoc.appendChild(nombreDocTabla)
        filaInfoDoc.appendChild(apellidoDocTabla)
        filaInfoDoc.appendChild(numCedulaDocTabla)
        filaInfoDoc.appendChild(especialidadSelec)
        filaInfoDoc.appendChild(numeroConsulTabla)
        filaInfoDoc.appendChild(emailTabla)

    })
}

//Lectura del JSON
const file = "./especialistas.json"
const reader = new FileReader()

fetch(file)
.then(resp => resp.json())
.then(data => {
    console.log(data, typeof(data))
    datosIngresadosDoctores = data
    infoDoctoresTabla()
})
.catch(error => console.log(error))


















//PERSONAS
var datosIngresadosPersonas = [];

function guardarDatosPersonas(nombrePersona, apellidoPersona, numCedulaPersona, edadPersona, telefonoPersona, especialidadRequerida){
    
    const infoPersonas = {
        nombrePer : nombrePersona,
        apellidoPer : apellidoPersona,
        numeroCedulaPersona : numCedulaPersona,
        edadPersona : edadPersona,
        telefonoPersona : telefonoPersona,
        especialidadRequerida : especialidadRequerida
    }
    console.log(infoPersonas)

    datosIngresadosPersonas.push(infoPersonas);

    let jsonDatosPersonas = JSON.stringify(infoPersonas)
    console.log(jsonDatosPersonas)
}




