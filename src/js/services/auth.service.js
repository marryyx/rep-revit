import { Routing} from '../root/routing.js';
import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';

const FINDED_USER_DATA = [];


export class AuthService {
    constructor() {
        this.localAuthKey = CLIENT_STORAGE_KEYS.userAuthData;
        this.localUsersKey = CLIENT_STORAGE_KEYS.userData;
    }

    getDataUsersOfServer() {
        const dataUser = localStorage.getItem(this.localUsersKey);

        if (!dataUser) return

        return JSON.parse(dataUser)
    };

    setUserAuth() {
        const data = this.getUsesOfTemp(); 
        if (!data) return

        localStorage.setItem(this.localAuthKey, JSON.stringify({...data[0]}));
    };

    setUserOfTemp(data) {
        FINDED_USER_DATA.push(data);
    };

    getUsesOfTemp() {
        return FINDED_USER_DATA;
    };

    signIn(userData) {
        this.setUserOfTemp(userData);
        this.setUserAuth();

        Routing.goToHome();
    }

    signOut() {
        localStorage.removeItem(this.localAuthKey);
        window.location.reload();
    }

    getAuthData() {
        const data = localStorage.getItem(this.localAuthKey);
        return JSON.parse(data);
    };

    getUserFirstName() {
        const data = this.getAuthData();

        if (!data) return;

        return data.usernameFirst;
    };

    getUserLastName() {
        const data = this.getAuthData();

        if (!data) return;

        return data.usernameLast;
    };

    getFullName() {
        const data = this.getAuthData();

        if (!data) return;

        return `${data.usernameFirst} ${data.usernameLast}`;
    };

    getFullNameABR() {
        const data = this.getAuthData();

        if (!data) return;

        const first = data.usernameFirst.slice(0, 1);
        const last = data.usernameLast.slice(0, 1);

        return (first + last).toUpperCase();
    }

    getUserEmail() {
        const data = this.getAuthData();

        if (!data) return;

        return data.email;
    };
}