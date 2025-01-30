const wrapperForm = document.querySelector('.form-Wrapper');

const emailInput = wrapperForm.querySelector('.form-Wrapper__input');

const buttonSumbit = wrapperForm.querySelector('.form-Wrapper__button .button-sumbit')

buttonSumbit.addEventListener('click', () => {
    const value = emailInput.value;
    if(!value.includes('@gmail.com')) {
        emailInput.classList.add('error');

        setTimeout(() => 
            emailInput.classList.remove('error'), 2000)

    } else {
        localStorage.setItem('user', emailInput.value);
    }
});