var errores;

function iniciar(){
	var btnenviar = document.getElementById("btnSend");
	var form = document.getElementById("frmlogin");
	var name = document.getElementById("txtNombre");
	var apell = document.getElementById("txtApellido");
	var contra = document.getElementById("txtContra");
	var email = document.getElementById("txtCorreo");
	var dui = document.getElementById("txtDui");
	var nit = document.getElementById("txtNit");
	var phone = document.getElementById("txtTelefono");

	if(btnenviar.addEventListener){
		btnenviar.addEventListener("click", function(){
			//Validaciones (Función)
			errores = "";
			if (validarNombre(name.value) == 0 || validarNombre(apell.value) == 0 ||
				validarCorreo(email.value) == 0 || validarDui(dui.value) == 0 ||
				validarNit(nit.value) == 0 || validarTelefono(phone.value) == 0 ) {
					document.getElementById("fail").innerHTML = "<br><h3>Errores</h3> <p>"+ errores + "</p>";				
			}else{
				guardarDatos(name.value, apell.vallue, contra.value, email.value, dui.value, nit.value, phone.value);
				form.submit();
			}
		}, false);
	}
	else{
		btnenviar.attachEvent("onclick", function(){
			//Validaciones (Función)
			if (validarNombre(name.value) == 0 || validarNombre(apell.value) == 0 ||
				validarCorreo(email.value) == 0 || validarDui(dui.value) == 0 ||
				validarNit(nit.value) == 0 || validarTelefono(phone.value) == 0 ) {
					document.getElementById("fail").innerHTML = "<br><h3>Errores</h3> <p>"+ errores + "</p>";
			}else{
				guardarDatos(name.value, apell.vallue, contra.value, email.value, dui.value, nit.value, phone.value);
				form.submit();
			}
		});
	}
}

function guardarDatos(nombre, apellido, password, correo, dui, nit, telefono){
	var Usuario = [
		{'Nombre':nombre, 'Apellido':apellido, 'Contraseña': password, 'Email': correo, 'DUI': dui, 'NIT':nit, 'Telefono': telefono}
	]

	var recoveredData = localStorage.getItem('user')
	if(recoveredData == null){
	    //No tenemos nada guardado, por lo cual vamos a guardar el usuario
	  localStorage.setItem('user', JSON.stringify(Usuario))
	} else {
	    //Tenemos algo, por lo cual vamos a añadir un nuevo usuario
	  var data = JSON.parse(recoveredData)
	  var newUser = {'Nombre':nombre, 'Apellido':apellido, 'Contraseña': password, 'Email': correo, 'DUI': dui, 'NIT':nit, 'Telefono': telefono}
	  //Guardando nuevo usuario
	  data.push(newUser)
	  localStorage.setItem('user', JSON.stringify(data))
	}
}

function validarNombre(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor de nombre o apellido";
        return 0;
    }

    re = /(^\w+)\s(\w+)$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Error en: " + dato + ". Debe ingresar 2 nombres y apellidos";
        return 0;
    }

    return 1;
}

function validarCorreo(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores = "No se ha ingresado ningún valor de correo";
        return 0;
    }

    re = /\w+([\.-]?\w+)*@\w+([-]?\w+)*\.(\w+)+$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Su correo " + dato + " no es válido";
        return 0;
    }

    return 1;
}

function validarDui(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor de dui";
        return 0;
    }

    re = /(^\d{8})[-]\d{1}$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Su número de Dui " + dato + " no es válido";
        return 0;
    }

    return 1;
}

function validarNit(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor de nit";
        return 0;
    }

    re = /(^\d{4})[-](\d{6})[-](\d{3})[-](\d{1})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Su número de Nit " + dato + " no es válido";
        return 0;
    }

    return 1;
}

function validarTelefono(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor de teléfono";
        return 0;
    }

    re = /(^\d{4})[-](\d{4})/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Su número de teléfono " + dato + " no es válido";
        return 0;
    }

    return 1;
}


if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}