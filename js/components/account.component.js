const headerAccount = document.querySelector('.header__account');
const menuUser = headerAccount.querySelector('.user-account__menu')

const headerSignIn = document.querySelector('.header__sign-up');

const accountUser = headerAccount.querySelector('.user-account');

const emailUser = headerAccount.querySelector('.user-account-top__email');

const btnSignOut = headerAccount.querySelector('.user-account-top__sign-out')

// ----------------------------------------
accountReg
// ----------------------------------------

function recheckAccountUser() {
    const email = localStorage.getItem('email');
    emailUser.innerHTML = email;

    if (!email) {
        headerAccount.classList.add('--is-show');
        headerSignIn.classList.remove('--is-show');
    } else {
        headerSignIn.classList.add('--is-show');
        headerAccount.classList.remove('--is-show');
    }
};

export const accountComponent = () => {
    recheckAccountUser();

    accountUser.addEventListener('click', () => {
        menuUser.classList.toggle('--close');
    });

    btnSignOut.addEventListener('click', () => {
        localStorage.removeItem('email');
        window.location.href = 'index.html';
    });
}