import { CLIENT_STORAGE_KEYS } from '../store/globals-params-store.js';


export class AuthService {
    constructor() {
        this.localAuthKey = CLIENT_STORAGE_KEYS.userAuthData;
    }
    
    // signIn() {
        
    // }

    signOut() {
        localStorage.removeItem(this.localAuthKey);
    }

    getAuthData() {
        const data = localStorage.getItem(this.localAuthKey);
        return JSON.parse(data);
    };

    getUserFirstName() {
        const data = this.getAuthData();

        if(!data) return;

        let name;

        data.forEach((item) => { name = item.usernameFirst });

        return name;
    };

    getUserLastName() {
        const data = this.getAuthData();

        if(!data) return;

        let name;

        data.forEach((item) => { name = item.usernameLast });
        return name;
    };

    getFullName() {
        const data = this.getAuthData();

        if(!data) return;

        let name;

        data.forEach((item) => { name = `${item.usernameFirst} ${item.usernameLast}` });
        return name;
    };

    getFullNameABR() {
        const data = this.getAuthData();

        if(!data) return;

        const first = data[0].usernameFirst.slice(0, 1);
        const last = data[0].usernameLast.slice(0, 1);

        return (first + last).toUpperCase();
    }

    getUserEmail() {
        const data = this.getAuthData();

        if(!data) return;
        
        let email;

        data.forEach((item) => { email = item.email });
        return email;
    };
}