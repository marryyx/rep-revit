const blockNameUser = document.querySelector('.card-personal__value [data-full-name]');

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
        blockNameUser.textContent = `${item.usernameFirst} ${item.usernameLast}`;
    });
});