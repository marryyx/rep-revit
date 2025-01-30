import { Routing } from './root/routing.js'

const wrapperAuth = document.querySelector('.auth');

const emailInput = wrapperAuth.querySelector('#email');
const form = wrapperAuth.querySelector('form');

// -----------------

const USER_DATA_KEY = 'userData';
// const USER_DATA = [];
const USER_DATA_RED = {};

// -----------------

const getDataUserOfStore = () => {
    const dataUser = localStorage.getItem(USER_DATA_KEY);

    if (!dataUser) return

    return JSON.parse(dataUser)
};

const getUserData = () => {
    const data = getDataUserOfStore();

    let emailFound = false;

    data.forEach(elm => {
        if (emailInput.value === elm.email) {
            emailFound = true;
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

    Routing.goToHome();
});

// document.addEventListener("DOMContentLoaded", (event) => {

// });