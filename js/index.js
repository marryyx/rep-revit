const cardAll = document.querySelectorAll('.select-term__card');
const tabContent = document.querySelectorAll('.buy-component__tabs-content');
const tabFooterContent = document.querySelectorAll('.buy-component__footer')
const tabs = document.querySelectorAll('.buy-component__tab');
const priceBlock = document.querySelector('.price-text-buy');
const deskBlock = document.querySelector('.desk-text-buy');

const priceCard = document.querySelector('#price-buy-2');
const btnInfo = document.querySelector('.buttons-buy-tokens')

const PLAN_PRICE = {
    full: {
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
    },

    flex: {
        first: {
            price: '$300',
            description: 'Buy tokens'
        },
        second: {
            price: '$1,500',
            description: 'Buy tokens'
        },
        third: {
            price: 'Varies',
            description: 'Estimate tokens needed'
        }
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
    const price = PLAN_PRICE.full[key].price;
    const description = PLAN_PRICE.full[key].description;

    const priceTwo = PLAN_PRICE.flex[key].price;
    const btnDesk = PLAN_PRICE.flex[key].description;

    btnInfo.innerHTML = btnDesk;
    priceCard.innerHTML = priceTwo;
    priceBlock.innerHTML = price;
    deskBlock.textContent = description;
};

const updateContentOfPlan = (elm) => {
    const pricePlans = elm.querySelector('p');
    const key = elm.dataset.select;

    pricePlans.textContent = PLAN_PRICE.full[key].price;
};

cardAll.forEach(element => {
    updateContentOfPlan(element);

    element.addEventListener("click", () => {
        clearTabAndCard(cardAll, '--is-select');

        updatePrice(element.dataset.select);

        element.classList.add('--is-select');
    });
});

updatePrice('first');
cardAll[0].classList.add('--is-select');

const btnBasket = document.querySelector('.header__btn-basket');
const btnClose = document.querySelectorAll('[closeBasket]');
const dialogBasket = document.querySelector('.basket');

btnBasket.addEventListener('click', () => {
    dialogBasket.showModal();
});

btnClose.forEach(element => {
    element.addEventListener('click', () => {
        dialogBasket.close();
    });
});

const addBasket = document.querySelector('.select-term__button-add');
const basket = document.querySelector('.header__btn-basket');

addBasket.addEventListener('click', () => {
    const basketValue = parseInt(basket.dataset.basket);
    basket.dataset.basket = basketValue + 1;
    addToBasket('Flex', '1 year', 100, 300);
});

const addToBasket = (type, term, quanity, price) => {
    const basketContent = document.querySelector('.basket__content')
    const typeImage = type ? 'coins.png' : 'revit.png';
    const typeCaption = type ? 'Flex' : 'Revit';

    const basket = 
                `<div class="basket__content-card">
                    <div class="basket__content-top">
                        <p><img src="./image/${typeImage}" alt="#">${typeCaption}</p>
                        <h3 class="total">$${price}</h3>
                    </div>

                    <div class="basket__content-title">
                        <p>Term</p>
                        <p>Quanity</p>
                    </div>

                    <div class="basket__content-subtitle">
                        <h3>${term}</h3>
                        <h3>${quanity}</h3>
                    </div>

                    <div class="basket__content-btn-remove">
                        <button class="btn-remove">Remove</button>
                    </div>
                </div>`
    basketContent.innerHTML = basket;
} 