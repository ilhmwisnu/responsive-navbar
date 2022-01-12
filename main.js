const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')
const span = hamburger.childNodes;
// hamburger.classList.toggle('')

hamburger.addEventListener('click', ()=>{
    console.log('halo')
    span[1].classList.toggle('rotate1')
    span[3].classList.toggle('hide')
    span[5].classList.toggle('rotate2')
    menu.classList.toggle('show')
    
    
})


