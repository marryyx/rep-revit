import { AuthService } from '../services/auth.service.js';

const menuUser = document.querySelector('.user-account__menu')

const accountUser = document.querySelector('[data-user-button]');

const btnSignOut = document.querySelector('.user-account__btn-sign-out');

const emailUser = document.querySelector('.user-account__email');
const fullname = document.querySelector('.user-account__fullname');

const profileModalComponent = () => {
    const auth = new AuthService();

    const recheckAccountUser = () => {
        emailUser.innerHTML = auth.getUserEmail();
        fullname.textContent = auth.getFullName();
    };

    accountUser.addEventListener('click', () => {
        menuUser.classList.toggle('gm-hide');
    });

    btnSignOut.addEventListener('click', () => {
        localStorage.removeItem(USER_AUTH_KEY);
    });

    recheckAccountUser();
}

export { profileModalComponent }