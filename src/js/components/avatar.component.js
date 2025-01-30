import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

const avatarComponentInit = (host) => {
    const avatarTitle = host.querySelector('figcaption');

    const getAuthData = () => {
        const userAuthData = localStorage.getItem(CLIENT_STORAGE_KEYS.userAuthData);

        if(!userAuthData) return

        return JSON.parse(userAuthData);
    };

    const gettingFullNameFromData = () => {
        const data = getAuthData();
        
        data.forEach(item => {
            const firstName = item.firstName;
            const lastName = item.lastName;

            const fullName = firstName + lastName;
            console.log('fullName =', fullName);
        });
    }
    
    gettingFullNameFromData()
}

const avatarComponent = () => {
    const host = document.querySelector('.avatar');

    if (!host) { return }

    avatarComponentInit(host)
}

export { avatarComponent }