const cardAll = document.querySelectorAll('.select-term__card');
const tabContent = document.querySelectorAll('.buy-component__tabs-content');
const tabFooterContent = document.querySelectorAll('.buy-component__footer')
const tabs = document.querySelectorAll('.buy-component__tab');
const priceBlock = document.querySelector('.price-text-buy');
const deskBlock = document.querySelector('.desk-text-buy');

const priceCard = document.querySelector('#price-buy-2');
const btnInfo = document.querySelector('.buttons-buy-tokens')

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

const PLAN_PRICE_TWO = {
    first: {
        price: '$300',
        btn: 'Buy tokens'
    },
    second: {
        price: '$1,500',
        btn: 'Buy tokens'
    },
    third: {
        price: 'Varies',
        btn: 'Estimate tokens needed'
    }
};

const clearTabAndCard = (element, newClass) => {
    element.forEach(item => {
        item.classList.remove(newClass);
    });
};

const selectTabContent = (name, content, classHide) =>
    content.forEach(item => {
        const tabContent = item.dataset.tab

        name != tabContent ? item.classList.add(classHide) : item.classList.remove(classHide)
    });


tabs.forEach(element => {
    element.addEventListener("click", () => {
        clearTabAndCard(tabs, '--is-active');
        element.classList.add('--is-active');
        const tabNane = element.dataset.tab;

        selectTabContent(tabNane, tabContent, '--is-hide');
        selectTabContent(tabNane, tabFooterContent, '--footer-hide');
    });
});

const updatePrice = (key) => {
    const price = PLAN_PRICE[key].price;
    const description = PLAN_PRICE[key].description;

    const priceTwo = PLAN_PRICE_TWO[key].price;
    const btnDesk = PLAN_PRICE_TWO[key].btn;

    btnInfo.innerHTML = btnDesk;
    priceCard.innerHTML = priceTwo;
    priceBlock.innerHTML = price;
    deskBlock.textContent = description;
};

const updateContentOfPlan = (elm) => {
    const pricePlans = elm.querySelector('p');
    const key = elm.dataset.select;

    pricePlans.innerHTML = PLAN_PRICE[key].price;
};

cardAll.forEach(element => {
    updateContentOfPlan(element);

    element.addEventListener("click", () => {
        clearTabAndCard(cardAll, '--is-select');

        updatePrice(element.dataset.select);

        element.classList.add('--is-select');
    });
});

// const updatePriceTwo = (key) => {
//     const price = PLAN_PRICE_TWO[key].price;
//     priceCard.innerHTML = price;
// };

// const updateContentOfPlanTwo = (elm) => {
//     const pricePlans = elm.querySelector('p');
//     const key = elm.dataset.select;

//     pricePlans.innerHTML = PLAN_PRICE_TWO[key].price;
// };

// cardAll.forEach(element => {
//     updateContentOfPlanTwo(element);

//     element.addEventListener("click", () => {
//         clearSelectCard();

//         updatePriceTwo(element.dataset.select);

//         element.classList.add('--is-select');
//     });
// });

updatePrice('first');
cardAll[0].classList.add('--is-select');