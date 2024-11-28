const wrapper = document.querySelector('.form-Wrapper');

const inputs = wrapper.querySelectorAll('input');

const buttonSumbit = wrapper.querySelector('.form-Wrapper__button .button-sumbit');

// -----------------

const USER_DATA_KEY = 'userData';
const USER_DATA = [];

// -----------------

const setDataStore = (data) => {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
};

function getDataOfInputs() {
    const user = {
        usernameFirst: '',
        usernameLast: '',
        email: '',
        confirmEmail: '',
        password: '',
        pravicy: '',
    };

    let isValid = true;

    inputs.forEach(item => {
        const value = item.value;

        if ((!value.trim()) || (item.id === 'email' && !value.includes('@gmail.com'))) {
            item.classList.add('error');
            setTimeout(() => item.classList.remove('error'), 2000);
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
});