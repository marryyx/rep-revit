import { Routing } from '../root/routing.js';
import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

// ----------------------------------------
const USER_AUTH_KEY = CLIENT_STORAGE_KEYS.userAuthData;
// ----------------------------------------

const getAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

export class AccountComponent {
    host = document.querySelector('.header__account');
    headerSignIn = document.querySelector('.header__sign-up');

    constructor() {
        if (!this.host) return;

        this.menuUser = this.host.querySelector('.user-account__menu')
        this.accountUser = this.host.querySelector('[data-user-button]');
        this.btnSignOut = this.host.querySelector('.user-account__btn-sign-out');

        this.emailUser = this.host.querySelector('.user-account__email');
        this.firstName = this.host.querySelector('.user-account__fullna');
        this.userProfile = this.host.querySelector('[data-user-profole]');

        this.accountUser.addEventListener('click', () => {
            this.menuUser.classList.toggle('gm-hide');
        });

        this.btnSignOut.addEventListener('click', () => {
            localStorage.removeItem(USER_AUTH_KEY);
        });

        this.userProfile.addEventListener('click', () => {
            Routing.goToProfile();
        });
    }

    recheckAccountUser = () => {
        const dataUser = getAuthData();

        if (!dataUser) {
            this.host.classList.add('gm-hide');
            this.headerSignIn.classList.remove('gm-hide');
        } else {
            this.headerSignIn.classList.add('gm-hide');
            this.host.classList.remove('gm-hide');

            dataUser.forEach((item) => {
                this.emailUser.innerHTML = item.email
                this.firstName.textContent = `${item.usernameFirst} ${item.usernameLast}`
            });
        }
    };

    authData = getAuthData();
    if(authData) {
        recheckAccountUser()
    }
}