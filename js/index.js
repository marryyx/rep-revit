const cardAll = document.querySelectorAll('.select-term__card');
const priceCard = document.querySelector('.price-text-buy');
const deskCard = document.querySelector('.desk-text-buy')
const tabs = document.querySelectorAll('.buy-component__tab');

const INFORMATION = {
    first: '/3 years for 1 user (pay annually)',
    second: '/year for 1 user',
    third: '/month for 1 user'
};

const PRICE = {
    first: '$8,730',
    second: '$2,910',
    third: '$365'
};

const clearSelectTab = () => {
    tabs.forEach(element => {
        element.classList.remove('--is-active');
    });
};

tabs.forEach(element => {
    element.addEventListener("click", () => {
        clearSelectTab();
        element.classList.add('--is-active');
    });
});

const clearSelectCard = () => {
    cardAll.forEach(element => {
        element.classList.remove('--is-select');
    });
};

cardAll.forEach(element => {
    element.addEventListener("click", () => {
        clearSelectCard();
        element.classList.add('--is-select');
    });
});