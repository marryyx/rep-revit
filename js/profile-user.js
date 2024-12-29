const profileMain = document.querySelector('.profile-main');
const userName = profileMain.querySelector('.profile-main__welcome span');

const profileAside = document.querySelector('.profile-aside');

const headerSearch = document.querySelector('.header__search');
const headerBurgerBtn = document.querySelector('.header__burger');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const getUserAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = getUserAuthData();

    dataUser.forEach(item => {
        userName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
    });
});