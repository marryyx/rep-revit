const headerAccount = document.querySelector('.header__account');
const menuUser = headerAccount.querySelector('.user-account__menu')

const headerSignIn = document.querySelector('.header__sign-up');
const accountUser = headerAccount.querySelector('.user-account');
const btnSignOut = headerAccount.querySelector('.user-account-top__sign-out');

const emailUser = headerAccount.querySelector('.user-account-top__email');
const firstName = headerAccount.querySelector('.user-account-top__fullname');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const getAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

function recheckAccountUser() {
    const dataUser = getAuthData();

    if (!dataUser) {
        headerAccount.classList.add('gm-hide');
        headerSignIn.classList.remove('gm-hide');
    } else {
        headerSignIn.classList.add('gm-hide');
        headerAccount.classList.remove('gm-hide');

        dataUser.forEach(item => {
            emailUser.innerHTML = item.email;
            firstName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
        });
    }
};

export const accountComponent = () => { 
    const authData = getAuthData();

    if(authData) {
        recheckAccountUser();
    }

    accountUser.addEventListener('click', () => {
        menuUser.classList.toggle('gm-hide');
    });

    btnSignOut.addEventListener('click', () => {
        localStorage.removeItem(USER_AUTH_KEY);
    });
}