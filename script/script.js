const open = document.querySelector('.menu');
const navContent = document.querySelector('.nav');

open.addEventListener('click', ()=> {
    navContent.classList.toggle('show');
})
