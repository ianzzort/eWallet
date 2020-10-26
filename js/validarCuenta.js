var errores;

function iniciar(){
	var btnenviar = document.getElementById("btnSend");
	var form = document.getElementById("frmdatos");
	var cantidad = document.getElementById("txtCantidad");
	var acc = document.getElementById("txtCuenta");
	var bank = document.getElementById("txtBanco");

	if(btnenviar.addEventListener){
		btnenviar.addEventListener("click", function(){
			errores="";
			//Validaciones (Función)
			if (validarCantidad(cantidad.value) == 0 || validarCuenta(acc.value) == 0) {
				document.getElementById("error").innerHTML = "<p>"+ errores + "</p>";
			}else{
				guardarDatos(cantidad.value, bank.value, acc.value);
				form.submit();
			}
		}, false);
	}
	else{
		btnenviar.attachEvent("onclick", function(){
			errores="";
			//Validaciones (Función)
			if (validarCantidad(cantidad.value) == 0 || validarCuenta(acc.value) == 0) {
				document.getElementById("error").innerHTML = "<br><p>"+ errores + "</p>";
			}else{
				guardarDatos(cantidad.value, bank.value, acc.value);
				form.submit();
			}
		});
	}
}

function guardarDatos(efectivo, banco, cuenta){
	var usuario = JSON.parse(localStorage.getItem("user"));
	var CuentaUsuario = [
		{"Usuario": usuario, "Efectivo": efectivo, "Banco": banco, "Cuenta": cuenta}
	]

	var recoveredData = localStorage.getItem('account')
	if(recoveredData == null){
	    //No tenemos nada guardado, por lo cual vamos a guardar la cuenta
	  localStorage.setItem('account', JSON.stringify(CuentaUsuario))
	} else {
	    //Tenemos algo, por lo cual vamos a añadir una nueva cuenta
	  var data = JSON.parse(recoveredData)
	  var newAcc = {"Usuario": usuario, "Efectivo": efectivo, "Banco": banco, "Cuenta": cuenta}
	  //Guardando nueva cuenta
	  data.push(newAcc)
	  localStorage.setItem('account', JSON.stringify(data))
	}
}

function validarCantidad(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor saldo";
        return 0;
    }

    re = /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]|5000)[.](\d{2})$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Cantidad ingresada " + dato + " no válida";
        return 0;
    }

    return 1;
}

function validarCuenta(dato){
	var re=null;
	var valido = false;

	if (dato == null || dato == "" || dato.length == 0) {
        errores += "No se ha ingresado ningún valor cuenta";
        return 0;
    }

    re = /^\d{10}$/;
    if (re.test(dato)) {
        valido = true;
    }

    if (valido == false) {
        errores += "Su cuenta " + dato + " no es válido";
        return 0;
    }

    return 1;
}

function mostrarDatos(){
	var i=0; 
	var texto = document.getElementById("mostrar");
	var usuario = JSON.parse(localStorage.getItem("user"));
	for (var user in usuario){
		i=user;
	}

	texto.innerHTML = "Bienvenido " + usuario[i].Nombre + "! Rellene la informacion solitada:";
}

if (window.addEventListener) {
    window.addEventListener("load", function(){
    	mostrarDatos();
    	iniciar();
    }, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", function(){
    	mostrarDatos();
    	iniciar();
    });
}