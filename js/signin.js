const wrapperForm = document.querySelector('.form-Wrapper');

const emailInput = wrapperForm.querySelector('#email');

const buttonSumbit = wrapperForm.querySelector('.form-Wrapper__button .button-sumbit');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);
    return JSON.parse(dataUser)
};

// console.log('ДАННЫЕ ЮЗЕРА =', getDataUserOfStore());

function logInInputCheked() {
    const users = getDataUserOfStore();

    users.forEach(item => {
        const message = wrapperForm.querySelector('.form-Wrapper__message');
        const notEmail = wrapperForm.querySelector('.form-Wrapper__not-email');
        const value = emailInput.value;

        if (!value || !value.includes('@gmail.com')) {
            notEmail.classList.add('--message-email');
            setTimeout(() => notEmail.classList.remove('--message-email'), 5000);
        } else if (value != item.email) {
            message.classList.add('--message-error');
            setTimeout(() => message.classList.remove('--message-error'), 5000);
        } else if (value === item.email) {
            window.location.href = 'signin-password.html';
        }
    });
}

buttonSumbit.addEventListener('click', () => {
    logInInputCheked();
});