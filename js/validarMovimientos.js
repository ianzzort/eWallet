function iniciar(){
    var btnenviar = document.getElementById("btnSend");
    var form = document.getElementById("frmdatos");

    if(btnenviar.addEventListener){
        btnenviar.addEventListener("click", function(){
            //Validaciones (Función)
            if (validarCantidad(document.frmdatos.txtCantidad.value) == 0 || validarCuenta(document.frmdatos.txtCuenta.value) == 0 ||
                validarFecha(document.frmdatos.txtFecha.value) == 0) {
                form.action = "";
            }else{
                form.action = "./ingresos.html";
            }
        }, false);
    }
    else{
        btnenviar.attachEvent("onclick", function(){
            //Validaciones (Función)
            if (validarCantidad(document.frmdatos.txtCantidad.value) == 0 || validarCuenta(document.frmdatos.txtCuenta.value) == 0 ||
                validarFecha(document.frmdatos.txtFecha.value) == 0) {
                form.action = "";
            }else{
                form.action = "./ingresos.html";
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

function validarCuenta(dato){
    var re=null;
    var valido = false;

    if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor cuenta");
        return 0;
    }

    re = /^\d{10}$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su cuenta " + dato + " no es válido");
        return 0;
    }

    return 1;
}

function validarFecha(dato){
    var re=null;
    var valido = false;

    if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor de fecha");
        return 0;
    }

    re = /^([1-9]|[1-2][0-9]|30|31)[/]([0][1-9]|10|11|12)[/](19[0-9][0-9]|20[0-2][0-9])$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        alert("Su fecha " + dato + " no es válida");
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