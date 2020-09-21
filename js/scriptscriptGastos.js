txtFecha = document.querySelector('#txtFecha');
selectOption = document.querySelector('#selectOption');
txtCantidad = document.querySelector('#txtCantidad');
txtCuenta = document.querySelector('#txtCuenta');

btnSend = document.querySelector('#btnSend');

class Gastos {
    constuctor(fecha, motivos, cantidad, cuenta){
        this.fecha = fecha,
        this.motivos = motivos, 
        this.cantidad = cantidad,
        this.cuenta = cuenta
    }
}

let gastos; 

btnSend.addEventListener('click', ()=> {
    gastos = new Gastos (txtFecha.value, selectOption.value, txtCantidad.value, txtCuenta.value);
});