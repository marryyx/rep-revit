export const subheadComponent = () => {
    const burgerBtn = document.querySelector('.subhead__burger');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('--open');
    });
}