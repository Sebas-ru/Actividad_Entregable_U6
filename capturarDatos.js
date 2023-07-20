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

    //Validar Nombre y Apellido
    if(validarNombre === ""){
        alert("Verifica tu nombre")
    }

    if(!validarApellido){
        alert("Verifica tu apellido")
    }

    if(!validarNumCedula){
        alert("Verifica bien tu número de documento, debe tener mínimo 10 dígitos y máximo 11 dígitos")
    }

    if(!validarNumConsul){
        alert("Número de consultorio incorrecto")
    }

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
    apellidoPersona = document.getElementById('apellidoPersonas').value,
    numCedulaPersona = document.getElementById('numeroCedulaPersonas').value,
    edadPersona = document.getElementById('edadPersonas').value,
    telefonoPersona = document.getElementById('telefonoPersonas').value,
    especialidadRequerida = document.getElementById('especialidadRequerida').value

    guardarDatosPersonas(nombrePersona, apellidoPersona, numCedulaPersona, edadPersona, telefonoPersona, especialidadRequerida);
}