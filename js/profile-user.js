const profileMain = document.querySelector('.profile-main');
const userName = profileMain.querySelector('.profile-main__user-name');

const headerSearch = document.querySelector('.header__search');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const getUserAuthData = () => {
    const data = localStorage.getItem(USER_AUTH_KEY)
    return JSON.parse(data);
};

function updateSize() {
    if (window.innerWidth < 574) {
        headerSearch.classList.add('gm-hide')
    } else {
        headerSearch.classList.remove('gm-hide')
    }
}

updateSize();
window.addEventListener("resize", updateSize);

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = getUserAuthData();

    dataUser.forEach(item => {
        userName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
    });
});