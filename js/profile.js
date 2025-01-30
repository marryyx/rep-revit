const menuUser = document.querySelector('.user-account__menu')

const accountUser = document.querySelector('[data-user-button]');
const btnSignOut = document.querySelector('.user-account__btn-sign-out');

const emailUser = document.querySelector('.user-account__email');
const firstName = document.querySelector('.user-account__fullname');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const getAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

function recheckAccountUser() {
    const dataUser = getAuthData();


    dataUser.forEach(item => {
        emailUser.innerHTML = item.email;
        firstName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    recheckAccountUser();

    accountUser.addEventListener('click', () => {
        menuUser.classList.toggle('gm-hide');
    });

    btnSignOut.addEventListener('click', () => {
        localStorage.removeItem(USER_AUTH_KEY);
    });
});