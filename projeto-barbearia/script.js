// Toggle para mostrar/ocultar o menu em dispositivos menores
const menuToggle = document.querySelector('header nav');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('active');
});
