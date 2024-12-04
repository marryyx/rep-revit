const wrapperAuth = document.querySelector('.auth');

const inputs = wrapperAuth.querySelectorAll('input');

const buttonSumbit = wrapperAuth.querySelector('#sumbit');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];

// -----------------

const setDataStore = (data) => {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
};

const getDataStore = () => {
    const dataUser = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    return dataUser
};

function getDataOfInputs() {
    const user = {
        usernameFirst: '',
        usernameLast: '',
        email: '',
        password: '',
    };

    let isValid = true;

    inputs.forEach(item => {
        const value = item.value;

        if (!value.trim()) {
            // item.classList.add('error');
            // setTimeout(() => item.classList.remove('error'), 2000);
            isValid = false;
        } else {
            user[item.id] = value;
        }
    });

    return { user, isValid };
}

buttonSumbit.addEventListener('click', () => {
    const { user, isValid } = getDataOfInputs();

    if (!isValid) {
        console.log('Форма невалидна');
        return;
    }

    USER_DATA.push(user);
    setDataStore(USER_DATA);

    window.location.href = 'signin.html';
});

document.addEventListener("DOMContentLoaded", (event) => {
    getDataStore()
});