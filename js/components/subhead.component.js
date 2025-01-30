export const subheadComponent = () => {
    const burgerBtn = document.querySelector('.subhead__burger');

    burgerBtn.addEventListener('click', () => {
        const hiddenItems = document.querySelector('.subhead__item.--industries')

        burgerBtn.classList.toggle('--open');

        hiddenItems.classList.toggle('--open');
    });
}