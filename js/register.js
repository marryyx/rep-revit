const wrapperAuth = document.querySelector('.auth');

const inputs = wrapperAuth.querySelectorAll('input');

const buttonSumbit = wrapperAuth.querySelector('#submit');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];

// -----------------

const setDataStore = (data) => {
    USER_DATA.push(data)

    localStorage.setItem(USER_DATA_KEY, JSON.stringify(USER_DATA));
};

const getDataStore = () => {
    const data = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    USER_DATA.push(...data)
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

    setDataStore(user);

    console.log('111');
    window.location.href = 'signin.html';
});

document.addEventListener("DOMContentLoaded", (event) => {
    getDataStore();
});