const cardAll = document.querySelectorAll('.select-term__card');
const tabs = document.querySelectorAll('.buy-component__tab');
const priceBlock = document.querySelector('.price-text-buy');
const deskBlock = document.querySelector('.desk-text-buy');

const PLAN_PRICE = {
    first: {
        price: '$8,730',
        description: '/3 years for 1 user (pay annually)',
    },
    second: {
        price: '$2,910',
        description: '/year for 1 user',
    },
    third: {
        price: '$365',
        description: '/month for 1 user',
    }
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

const updatePrice = (key) => {
    price = PLAN_PRICE[key].price;
    description = PLAN_PRICE[key].description;
};

const updateContentOfPlan = (elm) => {
    pricePlans = element.querySelector('p');
    console.log('price =', price);
    pricePlans.innerHTML = PLAN_PRICE.price;
};

cardAll.forEach(element => {
    updateContentOfPlan();

    element.addEventListener("click", () => {
        clearSelectCard();

        const data = element.dataset.select;

        updatePrice(data);

        priceBlock.innerHTML = price;
        deskBlock.textContent = description;

        element.classList.add('--is-select');
    });
});


updatePrice('first');
cardAll[0].classList.add('--is-select');