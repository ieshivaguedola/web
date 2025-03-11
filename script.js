// Funci—n para activar/desactivar el menœ hamburguesa en m—viles
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
