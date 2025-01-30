import { AuthService } from '../services/auth.service.js';
import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

const avatarComponentInit = (host) => {
    const auth = new AuthService();

    const avatarTitle = host.querySelector('figcaption');
    const userAuthData = auth.getFullNameABR();

    if (!userAuthData) return 

    avatarTitle.textContent = userAuthData;
}

const avatarComponent = () => {
    const host = document.querySelector('.avatar');

    if (!host) { return }

    avatarComponentInit(host)
}

export { avatarComponent }