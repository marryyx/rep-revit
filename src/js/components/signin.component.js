import { AuthService } from '../services/auth.service.js';

const signinComponentInit = (host) => {
    const auth = new AuthService();
    
    const emailInput = host.querySelector('#email');
    const form = host.querySelector('form');

    const inputPasswordParrent = host.querySelector('[data-target-password]');
    const inputPassword = inputPasswordParrent.querySelector('input');

    const activeInputPassword = () => {
        inputPasswordParrent.classList.remove('gm-hide');
        inputPassword.setAttribute('required', 'required');
    }

    const submitHendler = () => {
        const data = auth.getDataUsersOfServer();

        data.forEach(elm => {
            if (emailInput.value === elm.email) {
                activeInputPassword();

                if (inputPassword.value === elm.password) {
                    auth.signIn(elm);
                }
            }
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        submitHendler()
    });
};

const signinComponent = () => {
    const host = document.querySelector('.auth');

    if (!host) { return }

    signinComponentInit(host)
};


export { signinComponent }