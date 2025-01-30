import { Routing } from './root/routing.js'

const wrapperAuth = document.querySelector('.auth');

const emailInput = wrapperAuth.querySelector('#email');
const form = wrapperAuth.querySelector('form');

const passwordContainer = wrapperAuth.querySelector('.auth__input-container');
const passwordInput = wrapperAuth.querySelector('#password');

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
                return;
            }

            if (passwordInput.value !== elm.password) {
                console.log('the password is incorrect')
            }

            if (passwordInput.value === elm.password) {
                FINDED_USER_DATA.push(elm)
                isAuthEmail = true;

                setAuthUser();
                
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

    getUserData()
});

// document.addEventListener("DOMContentLoaded", (event) => {
//     const data = getDataUserOfStore();

//     USER_DATA.push(...data)
// });
