const faBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
console.log(overlay);
faBars.addEventListener('click', ()=> {
  overlay.classList.toggle('active');
});

const faXmark =document.querySelector('.fa-xmark');
faXmark.addEventListener('click', ()=> {
  overlay.classList.remove('active');
});

