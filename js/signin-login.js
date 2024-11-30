const wrapperForm = document.querySelector('.form-Wrapper');

const password = wrapperForm.querySelector('#password');

const buttonSumbit = wrapperForm.querySelector('.form-Wrapper__button .button-sumbit');

// -----------------

const USER_DATA_KEY = 'userData';

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);
    return JSON.parse(dataUser)
};

function checkedPassword() {
    const users = getDataUserOfStore();
    const pV = password.value;

    users.forEach(elm => {
        const message = document.querySelector('.form-Wrapper__message');

        if (!pV) {
            message.classList.add('--message-error');
            setTimeout(() => message.classList.remove('--message-error'), 5000);
        } else if (pV === elm.password) {
            window.location.href = 'index.html';
        }
    });
}

buttonSumbit.addEventListener('click', () => {
    checkedPassword()
});