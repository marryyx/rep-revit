import { AuthService } from '../services/auth.service'

const profileMain = document.querySelector('.profile-main');

const profileComponent = () => {
    const auth = new AuthService();

    const userTextContent = () => {
        const dataUser = auth.getAuthData();

        if (!dataUser) return;

        const userName = profileMain.querySelector('.profile-main__welcome [data-full-name-user]');
        userName.textContent = auth.getFullName();
    };

    userTextContent();
}

export { profileComponent }