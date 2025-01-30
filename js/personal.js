const html = document.querySelector('html');

const blockNameUser = document.querySelector('.card-personal__value [data-full-name]');

const dialogPersonal = document.querySelector('.profile-form');
const closeBtnDialog = document.querySelector('[data-close-modal-window]');

const cardItems = document.querySelectorAll('.card-personal__item');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const getUserAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

cardItems.forEach(item => {
    item.addEventListener('click', () => {
        dialogPersonal.classList.remove('gm-hide');
        item.classList.add('--active');
        // document.body.classList.add('gm-scroll-hide');
    });
});

closeBtnDialog.addEventListener('click', () => {
    dialogPersonal.classList.add('gm-hide');
    cardItems.classList.remove('--active');
    // document.body.classList.remove('gm-scroll-hide');
});

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = getUserAuthData();

    dataUser.forEach(item => {
        blockNameUser.textContent = `${item.usernameFirst} ${item.usernameLast}`;
    });
});