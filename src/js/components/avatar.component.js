import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

const avatarComponentInit = (host) => {
    const avatarTitle = host.querySelector('figcaption');
    const userAuthData = JSON.parse(localStorage.getItem(CLIENT_STORAGE_KEYS.userAuthData));

    if (!userAuthData) return 

    const name = `${userAuthData[0].usernameFirst.slice(0, 1)}${userAuthData[0].usernameLast.slice(0, 1)}`;
    avatarTitle.textContent = name.toUpperCase();
}

const avatarComponent = () => {
    const host = document.querySelector('.avatar');

    if (!host) { return }

    avatarComponentInit(host)
}

export { avatarComponent }