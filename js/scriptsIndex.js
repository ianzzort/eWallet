const Nombres = document.querySelector('#txtNombre');
const Apellidos = document.querySelector('#txtApellido');
const Email = document.querySelector('#txtCorreo');
const Password = document.querySelector('#Password');
const Direccion = document.querySelector('#Direccion');
const Pregunta = document.querySelector('#Pregunta');
const Dui = document.querySelector('#txtDui');
const Nit = document.querySelector('#txtNit');
const Telefono = document.querySelector('#txtTelefono');
const fechaNac = document.querySelector('#fechaNac');
const btnEntrar = document.querySelector('#btnSend');

class Usuario {
    constructor (nombres, apellidos, contra, correo, ubicacion, DUI, NIT, telefono, fechaNac) {
        this.nombres = nombres,
        this.apellidos = apellidos, 
        this.contra = contra,
        this.correo = correo,
        this.ubicacion = ubicacion,
        this.DUI = DUI,
        this.NIT = NIT,
        this.telefono = telefono,
        this.fechaNac = fechaNac
    }
}

const form = document.querySelector('#frmlogin');
const inputs = document.querySelectorAll('form input');
let usuario;

form.addEventListener('submit', (e)=> {
    e.preventDefault();
})

btnEntrar.addEventListener('click', ()=> {
    let i = 0;
    inputs.forEach(input => {
        if (input.value.length > 0) {i++}
    });

    if(i===){
        usuario = new Usuario(
            Nombres.value, 
            Apellidos.value,
            Password.value,
            Email.value,
            Direccion.value,
            Dui.value,
            Nit.value,
            Telefono.value,
            fechaNac.value
        );
            location.replace("./user/index.html");
    }else {
        console.log('Faltan')
    }
});
