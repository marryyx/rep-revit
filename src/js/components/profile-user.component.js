const profileMain = document.querySelector('.profile-main');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const profileUserComponent = () => {
    const getUserAuthData = () => {
        const data = localStorage.getItem(USER_AUTH_KEY);

        return JSON.parse(data);
    };

    const userTextContent = () => {
        const dataUser = getUserAuthData();

        if (!dataUser) return;

        dataUser.forEach(item => {
            const userName = profileMain.querySelector('.profile-main__welcome [data-full-name-user]');

            userName.textContent = `${item.usernameFirst} ${item.usernameLast}`;
        });
    };

    userTextContent();
}

export { profileUserComponent }