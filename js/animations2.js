var btnIngreso = document.querySelector('.btningreso');

var close = document.querySelectorAll('.close i');

var modalAddAccount = document.querySelector('.modalAddAccount');

btnIngreso.addEventListener('click', ()=> {
    modalAddAccount.classList.add('add');
    document.body.style.overflow="hidden";
});

close.forEach(elemento => {
    elemento.addEventListener('click', ()=>{
        modalAddAccount.classList.remove('add');
        document.body.style.overflow="auto";
    });
});
