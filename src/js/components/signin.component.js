import { Routing } from '../root/routing.js'
import { AuthService } from '../services/auth.service.js';
import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

const USER_DATA_KEY = CLIENT_STORAGE_KEYS.userData;
const USER_AUTH_KEY = CLIENT_STORAGE_KEYS.userAuthData;
// const USER_DATA = [];
const FINDED_USER_DATA = [];

let isAuthEmail = false;


const signinComponentInit = (host) => {
    const auth = new AuthService();
    
    const emailInput = host.querySelector('#email');
    const form = host.querySelector('form');

    const inputPasswordParrent = host.querySelector('[data-target-password]');
    const inputPassword = inputPasswordParrent.querySelector('input');

    const getDataUserOfStore = () => {
        const dataUser = localStorage.getItem(USER_DATA_KEY);

        if (!dataUser) return

        return JSON.parse(dataUser)
    };

    const setAuthUser = () => {
        if (!FINDED_USER_DATA) return

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
};

const signinComponent = () => {
    const host = document.querySelector('.auth');

    if (!host) { return }

    signinComponentInit(host)
};


export { signinComponent }
