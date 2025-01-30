export const langChangeComponent = () => {
    const langBlock = document.querySelector('.language-change');

    const buttonChangeLugn = document.querySelector('.header__lang .header__btn-lang');

    buttonChangeLugn.addEventListener('click', () => {
        langBlock.classList.toggle('--open');
    });
}