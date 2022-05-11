const show = document.querySelector('#show');
const menuAmburguer = document.querySelector('#amburguer');
const menuClose = document.querySelector('#close');


/* Menu abre e fecha RESPOSINVO */
menuAmburguer.addEventListener('click',()=>{
    show.classList.add('show')
    menuAmburguer.classList.add('show')
    menuClose.classList.remove('show')
})

menuClose.addEventListener('click',()=>{
    show.classList.remove('show')
    menuClose.classList.add('show')
    menuAmburguer.classList.remove('show')
})

/* links do menu */
const link = document.querySelector('.menu');
console.log(link);

link.addEventListener('click',()=>{
    show.classList.remove('show')
    menuClose.classList.add('show')
    menuAmburguer.classList.remove('show')
})