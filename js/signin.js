const wrapperAuth = document.querySelector('.auth');

const email = wrapperAuth.querySelector('#email');
const buttonSumbit = wrapperAuth.querySelector('#sumbit');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];
const USER_DATA_RED = {};

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);
    return JSON.parse(dataUser)
};

function logInInputCheked() {
    const users = getDataUserOfStore();
    // const message = wrapperAuth.querySelector('.auth__message');
    const value = email.value;

    users.forEach(item => {
        if (value != item.email) {
            console.log('нет')
        } else if (value === item.email) {
            console.log('да')
        }
    });
}

buttonSumbit.addEventListener('click', () => {
    logInInputCheked();
});

// document.addEventListener("DOMContentLoaded", (event) => {

// });