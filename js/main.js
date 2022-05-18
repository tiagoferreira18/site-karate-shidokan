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



/* Menu ativo conforme a seção visivel na página */

/* Todas as seções que possuem um id */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSec(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStar = checkpoint >= sectionTop
        const checkpointEnd = checkpoint<= sectionTop + sectionHeight

        if(checkpointStar && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId +']').classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId +']').classList.remove('active')
        }


    }


}