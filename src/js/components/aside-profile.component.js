const profileAside = document.querySelector('.profile-aside');

const headerSearch = document.querySelector('.header__search');
const headerBurgerBtn = document.querySelector('.header__burger');

const asideProfileComponent = () => {
    function updateSize() {
        const width = window.innerWidth;
    
        if (width < 574) {
            headerSearch.classList.add('gm-hide');
        } else {
            headerSearch.classList.remove('gm-hide');
        }
    
        if (width < 990) {
            headerBurgerBtn.classList.remove('gm-hide');
            profileAside.classList.add('gm-hide');
        } else {
            headerBurgerBtn.classList.add('gm-hide');
            profileAside.classList.remove('gm-hide');
    
            profileAside.classList.remove('--is-open')
        }
    }
    
    updateSize();
    window.addEventListener("resize", updateSize);
    
    headerBurgerBtn.addEventListener('click', () => {
        headerBurgerBtn.classList.toggle('--active');
    
        if (headerBurgerBtn.classList.contains('--active')) {
            profileAside.classList.remove('gm-hide');
            profileAside.classList.add('--is-open')
        } else {
            profileAside.classList.add('gm-hide')
        }
    });
}

export { asideProfileComponent }