import { Routing } from '../root/routing.js'

const wrapperAuth = document.querySelector('.auth');

const form = wrapperAuth.querySelector('form');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];

// -----------------

const registerComponent = () => {
    const setDataStore = (data) => {
        USER_DATA.push(data)
    
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(USER_DATA));
    };
    
    const getDataStore = () => {
        const data = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    
        if (!data) return
    
        USER_DATA.push(...data)
    };
    
    const getUserData = () => {
        const data = new FormData(form);
    
        const email = data.get('Email');
        const confirmEmail = data.get('ConfirmEmail');
    
        if (email != confirmEmail) {
            return false
        }
    
        return {
            usernameFirst: data.get('FirstName'),
            usernameLast: data.get('LastName'),
            email: data.get('Email'),
            password: data.get('Password'),
        };
    }
    
    const sumbitHandler = () => {
        const data = getUserData();
    
        if (!data) {
            console.log('form is not valid')
            return
        }
    
        setDataStore(data);
    
        Routing.goToSingIn();
    };
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        sumbitHandler();
    });
    
    document.addEventListener("DOMContentLoaded", (event) => {
        getDataStore();
    });
}

export { registerComponent }