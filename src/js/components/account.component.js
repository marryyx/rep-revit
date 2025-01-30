import { Routing } from '../root/routing.js';
import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

// ----------------------------------------
const USER_AUTH_KEY = CLIENT_STORAGE_KEYS.userAuthData;
// ----------------------------------------

const getAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

const accountComponentInit = (host) => {
    const menuUser = host.querySelector('.user-account__menu')

    const headerSignIn = document.querySelector('.header__sign-up');
    const accountUser = host.querySelector('[data-user-button]');
    const btnSignOut = host.querySelector('.user-account__btn-sign-out');

    const emailUser = host.querySelector('.user-account__email');
    const firstName = host.querySelector('.user-account__fullname');

    const userProfile = host.querySelector('[data-user-profole]');

    const recheckAccountUser = () => {
        const dataUser = getAuthData();

        if (!dataUser) {
            host.classList.add('gm-hide');
            headerSignIn.classList.remove('gm-hide');
        } else {
            headerSignIn.classList.add('gm-hide');
            host.classList.remove('gm-hide');

            dataUser.forEach(item => {
                emailUser.innerHTML = item.email;
                firstName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
            });
        }
    };

    const authData = getAuthData();

    if (authData) {
        recheckAccountUser();
    }

    accountUser.addEventListener('click', () => {
        menuUser.classList.toggle('gm-hide');
    });

    btnSignOut.addEventListener('click', () => {
        localStorage.removeItem(USER_AUTH_KEY);
    });

    userProfile.addEventListener('click', () => {
        Routing.goToProfile();
    });

}

const accountComponent = () => {
    const host = document.querySelector('.header__account');

    if (!host) {
        return
    }

    accountComponentInit(host)
}

export { accountComponent }