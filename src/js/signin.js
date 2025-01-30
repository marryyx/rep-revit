import { Routing } from './root/routing.js'

const wrapperAuth = document.querySelector('.auth');

const emailInput = wrapperAuth.querySelector('#email');
const form = wrapperAuth.querySelector('form');

const inputPasswordParrent = wrapperAuth.querySelector('[data-target-password]');
const inputPassword = inputPasswordParrent.querySelector('input');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_AUTH_KEY = 'userAuthData';
// const USER_DATA = [];
const FINDED_USER_DATA = [];

let isAuthEmail = false;

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);

    if (!dataUser) return

    return JSON.parse(dataUser)
};

const setAuthUser = () => {
    if(!FINDED_USER_DATA) return

    localStorage.setItem(USER_AUTH_KEY, JSON.stringify(FINDED_USER_DATA));
};

const checkInputPasswordVisible = () => {
    const isHidden = inputPasswordParrent.classList.contains('gm-hide');
    return isHidden;
}

const showInputPassword = () => {
    inputPasswordParrent.classList.remove('gm-hide');
}

const getUserData = () => {
    const data = getDataUserOfStore();

    let emailFound = false;

    data.forEach(elm => {
        if (emailInput.value === elm.email) {
            emailFound = true;

            const password = checkInputPasswordVisible();

            if (password) {
                showInputPassword();
                inputPassword.setAttribute('required', 'required');
                return;
            }

            if (inputPassword.value === elm.password) {
                FINDED_USER_DATA.push(elm)
                isAuthEmail = true;

                setAuthUser();
                
                Routing.goToHome();
            } else {
                console.log('the password is incorrect')
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

    getUserData()
});

// document.addEventListener("DOMContentLoaded", () => {
//     console.log('checkInputPasswordVisible =', checkInputPasswordVisible())
// });
