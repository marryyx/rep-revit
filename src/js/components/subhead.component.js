export const subheadComponent = () => {
    const burgerBtn = document.querySelector('.subhead__item.--more');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('--is-open');
    });
}