function menuBurguer() {
    const burguer = document.querySelector('.burguer__menu');
    const menu = document.querySelector('header>nav')

    burguer.addEventListener('click', () => {
        if (burguer.classList.contains('open') && menu.classList.contains('open')) {
            burguer.classList.remove('open');
            menu.classList.remove('open');
        } else {
            burguer.classList.add('open');
            menu.classList.add('open');
        }
    })
}

menuBurguer();