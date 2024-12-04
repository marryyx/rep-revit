const wrapperAuth = document.querySelector('.auth');

const emailInput = wrapperAuth.querySelector('#email');

const buttonSumbit = wrapperAuth.querySelector('#sumbit');

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
        const message = wrapperAuth.querySelector('.auth__message');
        const notEmail = wrapperAuth.querySelector('.auth__not-email');
        const value = emailInput.value;

        if (!value || (value != value)) {
            notEmail.classList.add('--message-email');
            setTimeout(() => notEmail.classList.remove('--message-email'), 5000);
        } else if (value != item.email) {
            message.classList.add('--message-error');
            setTimeout(() => message.classList.remove('--message-error'), 5000);
        } else if (value === item.email) {
            // window.location.href = 'signin-password.html';
        }
    });
}

buttonSumbit.addEventListener('click', () => {
    logInInputCheked();
});