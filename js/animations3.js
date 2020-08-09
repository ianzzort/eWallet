var btnGasto = document.querySelector('.btngasto');
var btnNuevo = document.querySelector('.new');

var close = document.querySelectorAll('.close i');

var modalAddAccount = document.querySelector('.modalAddAccount');
var modalMotivo = document.querySelector('.modalMotivo');

btnNuevo.addEventListener('click', ()=> {
    modalMotivo.classList.add('add');
    document.body.style.overflow="hidden";
});

btnGasto.addEventListener('click', ()=> {
    modalAddAccount.classList.add('add');
    document.body.style.overflow="hidden";
});


close[0].addEventListener('click', ()=>{
    modalAddAccount.classList.remove('add');
    document.body.style.overflow="auto";
});

close[1].addEventListener('click', ()=>{
    modalMotivo.classList.remove('add');
    document.body.style.overflow="auto";
});

