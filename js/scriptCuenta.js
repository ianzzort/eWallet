txtCantidad = document.querySelector('#txtCantidad');
txtBanco = document.querySelector('#txtBanco');
txtCuenta = document.querySelector('#txtCuenta');
btnSend = document.querySelector('#btnSend');

class Cuenta {
    constuctor(cantidad, banco, numeroCuenta){
        this.cantidad = cantidad,
        this.banco = banco, 
        this.numeroCuenta = numeroCuenta
    }
}

let cuenta; 

btnSend.addEventListener('click', ()=> {
    cuenta = new Cuenta (txtCantidad.value, txtBanco.value, txtNumeroDeCuenta.value);
});