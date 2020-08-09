var btnAddAccount = document.querySelector('.btnAddAccount');
var btnAddCC = document.querySelector('.btnAddCC');

var btnIngreso = document.querySelector('.btningreso');

var close = document.querySelectorAll('.close i');


var modalAddAccount = document.querySelector('.modalAddAccount');
var modalAddCC = document.querySelector('.modalAddCC');


btnAddAccount.addEventListener('click', ()=> {
    modalAddAccount.classList.add('addAccount');
    document.body.style.overflow="hidden";
});

btnAddCC.addEventListener('click', ()=> {
    modalAddCC.classList.add('addCC');
    document.body.style.overflow="hidden";
});



close.forEach(elemento => {
    elemento.addEventListener('click', ()=>{
        modalAddAccount.classList.remove('addAccount');
        modalAddCC.classList.remove('addCC');
        document.body.style.overflow="auto";
    });
});
