function iniciar(){
	var btnenviar = document.getElementById("btnSend");
	var form = document.getElementById("frmlogin");

	if(btnenviar.addEventListener){
		btnenviar.addEventListener("click", function(){
			//Validaciones (Función)
			if (validarNombre(document.frmlogin.txtNombre.value) == 0 || validarNombre(document.frmlogin.txtApellido.value) == 0 ||
				validarCorreo(document.frmlogin.txtCorreo.value) == 0 || validarDui(document.frmlogin.txtDui.value) == 0 ||
				validarNit(document.frmlogin.txtNit.value) == 0 || validarTelefono(document.frmlogin.txtTelefono.value) == 0 ) {
				location.replace("./");
			}else{
				location.replace("./user/index.html");
			}
		}, false);
	}
	else{
		btnenviar.attachEvent("onclick", function(){
			//Validaciones (Función)
			if (validarNombre(document.frmlogin.txtNombre.value) == 0 || validarNombre(document.frmlogin.txtApellido.value) == 0 ||
				validarCorreo(document.frmlogin.txtCorreo.value) == 0 || validarDui(document.frmlogin.txtDui.value) == 0 ||
				validarNit(document.frmlogin.txtNit.value) == 0 || validarTelefono(document.frmlogin.txtTelefono.value) == 0 ) {
				location.replace("./");
			}else{
				location.replace("./user/index.html");
			}
		});
	}
}

function validarNombre(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de nombre o apellido");
        return 0;
    }

    re = /(^\w+)\s(\w+)$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Error en: " + dato + ". Debe ingresar 2 nombres y apellidos");
        return 0;
    }

    return 1;
}

function validarCorreo(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de correo");
        return 0;
    }

    re = /\w+([\.-]?\w+)*@\w+([-]?\w+)*\.(\w+)+$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su correo " + dato + " no es válido");
        return 0;
    }

    return 1;
}

function validarDui(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de dui");
        return 0;
    }

    re = /(^\d{8})[-]\d{1}$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su número de Dui " + dato + " no es válido");
        return 0;
    }

    return 1;
}

function validarNit(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de nit");
        return 0;
    }

    re = /(^\d{4})[-](\d{6})[-](\d{3})[-](\d{1})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su número de Nit " + dato + " no es válido");
        return 0;
    }

    return 1;
}

function validarTelefono(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de teléfono");
        return 0;
    }

    re = /(^\d{4})[-](\d{4})/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su número de teléfono " + dato + " no es válido");
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
