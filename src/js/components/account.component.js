import { Routing } from '../root/routing.js';
import { AuthService } from '../services/auth.service.js';

export class AccountComponent {
    constructor() {
        this.auth = new AuthService();

        this.host = document.querySelector('.header__account');
        this.authData = this.auth.getAuthData();
    }

    show() {
        this.host.classList.add('gm-hide');
    }

    hide() {
        this.host.classList.remove('gm-hide');
    }

    updateUserContent = () => {
        const signIn = document.querySelector('.header__sign-up');

        const fullname = this.host.querySelector('.user-account__fullname');
        const emailUser = this.host.querySelector('.user-account__email');

        if (!this.authData) {
            this.show()
            signIn.classList.remove('gm-hide');
        } else {
            emailUser.innerHTML = this.auth.getUserEmail();
            fullname.textContent = this.auth.getFullName();

            this.hide();
            
            signIn.classList.add('gm-hide');
        }
    };

    menuUserToggleHendler() {
        const menu = this.host.querySelector('.user-account__menu');
        if (menu) menu.classList.toggle('gm-hide');
    }

    init() {
        if (!this.host) return;

        const userBTN = this.host.querySelector('[data-user-button]');
        const btnSignOut = this.host.querySelector('.user-account__btn-sign-out');
        const userProfile = this.host.querySelector('[data-user-profole]');

        this.updateUserContent()

        userBTN.addEventListener('click', () => {
            this.menuUserToggleHendler();
        });

        btnSignOut.addEventListener('click', () => {
            this.auth.signOut();
        });

        userProfile.addEventListener('click', () => {
            Routing.goToProfile();
        });
    }
}