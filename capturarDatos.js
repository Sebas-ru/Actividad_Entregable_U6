//ESPECIALISTAS
function capturarDatosDoctores(){ // Se crea la funcion capturarDatosDoctores() para capturar los datos ingresados en el formulario
    nombreEspecialista = document.getElementById('nombreEspecialista').value,
    validarNombre = /[a-zA-Z]{3,20}/.test(nombreEspecialista) //Expresion regular que me permite validar los requisitos especificados
    apellidoEspecialista = document.getElementById('apellidoEspecialista').value,
    validarApellido = /[a-zA-Z]{4,20}/.test(apellidoEspecialista)
    numeroCedula = document.getElementById('numeroCedula').value,
    validarNumCedula = /[0-9]{10,11}/.test(numeroCedula)
    opcionesEspecialidad = document.getElementById('opcionesEspecialidad').value,
    numeroConsultorio = document.getElementById('numeroConsultorio').value,
    validarNumConsul = /[0-9]{3,4}/.test(numeroConsultorio)
    emailEspecialista = document.getElementById('emailEspecialista').value
    validarEmail = /[@.]/.test(emailEspecialista)

    //Validar Nombre
    if(!validarNombre){
        alert("Verifica tu nombre")
    }

    //Validar apellido
    if(!validarApellido){
        alert("Verifica tu apellido")
    }

    //Validar número de cedula
    if(!validarNumCedula){
        alert("Verifica bien tu número de documento, debe tener mínimo 10 dígitos y máximo 11 dígitos")
    }

    //Validar número de consultorio
    if(!validarNumConsul){
        alert("Número de consultorio incorrecto")
    }

    //Validar correo
    if(!validarEmail){
        alert("Verifica bien tu correo")
    }
    
    guardarDatos(nombreEspecialista, apellidoEspecialista, numeroCedula, opcionesEspecialidad, numeroConsultorio, emailEspecialista);
    
    let formulario = document.getElementById("formulario")
    formulario.reset();
}


//PERSONAS
function capturarDatosPersonas(){
    nombrePersona = document.getElementById('nombrePersonas').value,
    validarNombrePersona = /[a-zA-Z]{3,20}/.test(nombrePersona) //Expresion regular que me permite validar los requisitos especificados
    apellidoPersona = document.getElementById('apellidoPersonas').value,
    validarApellidoPersona = /[a-zA-Z]{4,20}/.test(apellidoPersona)
    numCedulaPersona = document.getElementById('numeroCedulaPersonas').value,
    validarNumCedulaPersona = /[0-9]{10,11}/.test(numCedulaPersona)
    edadPersona = document.getElementById('edadPersonas').value,
    validarEdadPersona = /[0-9]{1,105}/.test(edadPersona)
    telefonoPersona = document.getElementById('telefonoPersonas').value,
    validarTelefonoPersona = /[0-9]{7,11}/.test(telefonoPersona)
    especialidadRequerida = document.getElementById('especialidadRequerida').value

    //Validar Nombre
    if(!validarNombrePersona){
        alert("Verifica tu nombre")
    }

    //Validar apellido
    if(!validarApellidoPersona){
        alert("Verifica tu apellido")
    }
    
    //Validar número de cedula
    if(!validarNumCedulaPersona){
        alert("Verifica bien tu número de documento, debe tener mínimo 10 dígitos y máximo 11 dígitos")
    }

    //Validar edad persona
    if(!validarEdadPersona){
        alert("Verifica bien tu edad")
    }

    //Validar edad persona
    if(!validarTelefonoPersona){
        alert("Verifica bien tu número de teléfono")
    }
    

    guardarDatosPersonas(nombrePersona, apellidoPersona, numCedulaPersona, edadPersona, telefonoPersona, especialidadRequerida);

    let formulario = document.getElementById("formulario")
    formulario.reset();
}