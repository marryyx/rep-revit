const wrapper = document.querySelector('.form-Wrapper');

const inputs = wrapper.querySelectorAll('input');

const buttonSumbit = wrapper.querySelector('.form-Wrapper__button .button-sumbit');

const USERDATA = [
    {
        usernameFirst: '',
        usernameLast: '',
        email: '',
        confirmEmail: '',
        password: '',
        pravicy: '',
    },
];

// -----------------

const setDataStore = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
};

const getDataStore = () => {
    const data = localStorage.getItem('userData');
    return JSON.parse(data);
};

const updateDateStore = () => {
    const storeDate = getDataStore();

    if (!storeDate) return
    USERDATA.push(...storeDate);
}

buttonSumbit.addEventListener('click', () => {
    const user = {};
    
    inputs.forEach(item => {
        const value = item.value;

        if (
            (!value.trim()) ||
            (item.id === 'email' && !value.includes('@gmail.com'))
        ) {
            item.classList.add('error');
            setTimeout(() => item.classList.remove('error'), 2000);
        } else {
            user[item.id] = value;
            setDataStore(USERDATA)
        }
    });

    USERDATA.push(user);
});