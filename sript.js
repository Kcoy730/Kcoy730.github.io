let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    });
}
// Agregamos una condición para mostrar el icono de menú solo en ventanas pequeñas
window.addEventListener('resize', () => {
    if (window.innerWidth <= 895) {
        menuIcon.style.display = 'block';
        navbar.classList.remove('active');
    } else {
        menuIcon.style.display = 'none';
    }
});
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}