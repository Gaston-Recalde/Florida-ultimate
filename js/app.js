// const navItems = document.querySelector('.nav__link');
// const openNavBtn = document.querySelector('.nav__hamburger');
// const closeNavBtn = document.querySelector('.nav__close');

// const closeNav = () => {
//     navItems.style.display = 'none';
//     openNavBtn.style.display = 'inline-block';
//     closeNavBtn.style.display = 'none';
// }

// closeNavBtn.addEventListener('click', closeNav);

// openNavBtn.addEventListener('click', () => {
//     navItems.style.display = 'flex';
//     openNavBtn.style.display = 'none';
//     closeNavBtn.style.display = 'inline-block';
// });

const navItems = document.querySelector('.nav__link');
const openNavBtn = document.querySelector('.nav__hamburger');
const closeNavBtn = document.querySelector('.nav__close');

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const handleClickOutsideMenu = (event) => {
    const target = event.target;
  
    // Verificar si el clic ocurrió fuera del menú
    if (!target.closest('.nav')) {
        closeNav();
    }
}

closeNavBtn.addEventListener('click', closeNav);
openNavBtn.addEventListener('click', openNav);
document.addEventListener('click', handleClickOutsideMenu);




// Funcion para mostrar solo un limite de caracteres en la descripcion de las noticias (card)
const textos = document.querySelectorAll('.noticia__p');
textos.forEach(longuitud => {
    const limiteCaracteres = 200;
    const text = longuitud.textContent;

    if (text.length > limiteCaracteres) {
      const textoRecortado = text.slice(0, limiteCaracteres) + '...';
      longuitud.textContent = textoRecortado;
    }

});