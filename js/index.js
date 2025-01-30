const cardAll = document.querySelectorAll('.select-term__card');
const tabs = document.querySelectorAll('.buy-component__tab');
const priceBlock = document.querySelector('.price-text-buy');
const deskBlock = document.querySelector('.desk-text-buy');

const INFORMATION = {
    first: '/3 years for 1 user (pay annually)',
    second: '/year for 1 user',
    third: '/month for 1 user'
};

// const PRICE = {
//     first: '$8,730',
//     second: '$2,910',
//     third: '$365'
// };

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

const updatePrice = (key, price) => {
    const priceBlock = document.querySelector('.price-text-buy');
    const deskBlock = document.querySelector('.desk-text-buy');

    priceBlock.innerHTML = price;
    deskBlock.textContent = INFORMATION[key];
};

cardAll.forEach(element => {
    element.addEventListener("click", () => {
        clearSelectCard();

        const price = element.querySelector('p').textContent;
        const data = element.dataset.select;

        updatePrice(data, price);

        priceBlock.innerHTML = price;

        element.classList.add('--is-select');
    });
});

updatePrice('first', cardAll[0].querySelector('p').textContent);
cardAll[0].classList.add('--is-select');