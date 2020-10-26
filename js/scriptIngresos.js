txtFecha = document.querySelector('#txtFecha');
txtMotivo = document.querySelector('#txtMotivo');
txtCantidad = document.querySelector('#txtCantidad');
txtCuenta = document.querySelector('#txtCuenta');

btnSend = document.querySelector('#btnSend');

class Ingresos {
    constuctor(fecha, motivo, cantidad, cuenta){
        this.fecha = fecha,
        this.motivo = motivo, 
        this.cantidad = cantidad,
        this.cuenta = cuenta
    }
}

let ingresos; 

btnSend.addEventListener('click', ()=> {
    ingresos = new Ingresos (txtFecha.value, txtMotivo.value, txtCantidad.value, txtCuenta.value);
});