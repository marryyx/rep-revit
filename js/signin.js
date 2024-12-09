import { Routing } from './root/routing.js'

const wrapperAuth = document.querySelector('.auth');

const emailInput = wrapperAuth.querySelector('#email');
const form = wrapperAuth.querySelector('form');

// -----------------

const USER_DATA_KEY = 'userData';
// const USER_DATA = [];
const USER_DATA_RED = {};

let accountReg = false;

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);

    if (!dataUser) return

    return JSON.parse(dataUser)
};

const passwordContainer = wrapperAuth.querySelector('.auth__input-container');
const passwordInput = wrapperAuth.querySelector('#password');

const inputPassword = () => {
    const isHidden = getComputedStyle(passwordContainer).display === 'none';
    return isHidden;
}

const getUserData = () => {
    const data = getDataUserOfStore();

    let emailFound = false;

    data.forEach(elm => {
        if (emailInput.value === elm.email) {
            emailFound = true;

            const password = inputPassword();

            if (password) {
                passwordContainer.classList.add('--show')
                passwordInput.setAttribute('required', 'required');
            }

            if (passwordInput.value != elm.password) {
                console.log('the password is incorrect')
            }

            if (passwordInput.value === elm.password) {
                accountReg = true;

                Routing.goToHome();
            }
        }
    });

    if (!emailFound) {
        console.log('email not found.');
        return
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    getUserData();
});

// document.addEventListener("DOMContentLoaded", (event) => {

// });