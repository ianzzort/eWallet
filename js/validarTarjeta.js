function iniciar(){
	var btnenviar = document.getElementById("btnConfirm");
	var form = document.getElementById("frmTarjeta");

	if(btnenviar.addEventListener){
		btnenviar.addEventListener("click", function(){
			//Validaciones (Función)
			if (validarCantidad(document.frmTarjeta.txtSaldo.value) == 0 || validarTarjeta(document.frmTarjeta.txtTarjeta.value) == 0 ||
				validarPorcentaje(document.frmTarjeta.txtInteres.value) == 0 ) {
				form.action = "";
			}else{
				form.action = "./panel.html";
			}
		}, false);
	}
	else{
		btnenviar.attachEvent("onclick", function(){
			//Validaciones (Función)
			if (validarCantidad(document.frmTarjeta.txtSaldo.value) == 0 || validarTarjeta(document.frmTarjeta.txtTarjeta.value) == 0 ||
				validarPorcentaje(document.frmTarjeta.txtInteres.value) == 0 ) {
				form.action = "";
			}else{
				form.action = "./panel.html";
			}
		});
	}
}

function validarCantidad(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor saldo");
        return 0;
    }

    re = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]|5000)[.](\d{2})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Cantidad ingresada " + dato + " no válida");
        return 0;
    }

    return 1;
}

function validarTarjeta(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de tarjeta");
        return 0;
    }

    re = /^(\d{4})[-](\d{4})[-](\d{4})[-](\d{4})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su tarjeta " + dato + " no es válida");
        return 0;
    }

    return 1;
}

function validarPorcentaje(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de interés");
        return 0;
    }

    re = /^([1-9]|[1-9][0-9])[.](\d{2})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su interés " + dato + " no es válido");
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