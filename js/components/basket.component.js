import { PLAN_PRICE } from '../store/pricing.js'

const btnBasket = document.querySelector('.header__btn-basket');
const btnClose = document.querySelectorAll('[closeBasket]');
const dialogBasket = document.querySelector('.basket');
const CARD_DATA_TEMP = [];

const addBasket = document.querySelectorAll('[data-action-add-cart]');
const basket = document.querySelector('.header__btn-basket');
const totalPrice = document.querySelector('.basket__total');

const html = document.querySelector("html");

const basketOpen = () => {
    html.classList.add('--add-scroll');

    dialogBasket.showModal();
    loadingMode();
    showCartsItems();
};

const basketClose = () => {
    html.classList.remove('--add-scroll');
    dialogBasket.close();
};

const setBasketCounter = (count) => {
    btnBasket.dataset.basketCounter = count;
};

const addToBasket = (data) => {
    const { type, term, quanity, price } = data;
    const basketContent = document.querySelector('.basket__content');
    const typeImage = type ? 'coins.png' : 'revit.png';
    const typeCaption = type ? 'Flex' : 'Revit';
    let itemId = 1;

    const basket =
        `<div id="${itemId}" class="basket__content-card">
                <div class="basket__content-top">
                    <p><img src="./image/${typeImage}" alt="#">${typeCaption}</p>
                    <h3 class="total">${price}</h3>
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
            </div>`;
    basketContent.insertAdjacentHTML("beforeend", basket);

    const basketContentCard = document.querySelector('.basket__content-card')
    const basketButtonRemove = document.querySelector('.basket__content-card .btn-remove');
    basketButtonRemove.addEventListener('click', () => {
        basketContentCard.remove();

        const itemsLenght = basketContent.querySelectorAll('.basket__content-card').length;
        setBasketCounter(itemsLenght);
    });

    const itemsLenght = basketContent.querySelectorAll('.basket__content-card').length;
    setBasketCounter(itemsLenght);

    priceTotal();
};

const basketInit = () => {
    const savedItem = getDataOfStore();

    updateCartDateOfStore(savedItem);

    showCartsItems();
};

const showCartsItems = () => {
    const savedItem = getDataOfStore();

    if (!savedItem) return

    document.querySelector('.basket__content').innerHTML = '';

    savedItem.forEach(item => {
        addToBasket(item);
    });
}

const setCartData = (typeParm, key) => {
    const newObg = { type: typeParm, ...PLAN_PRICE[key] }
    CARD_DATA_TEMP.push(newObg);
};

const loadingMode = () => {
    const wrapBasketLoader = document.querySelector('.basket__wrap');

    setTimeout(() => {
        wrapBasketLoader.classList.remove('--loading');
    }, 1000);
};

const updateCartDateOfStore = (storeDate) => {
    if (!storeDate) return
    CARD_DATA_TEMP.push(...storeDate);
}

const setDataToStore = (data) => {
    localStorage.setItem('basketItem', JSON.stringify(data));
    addToBasket(data);
};

const getDataOfStore = () => {
    const data = localStorage.getItem('basketItem');
    return JSON.parse(data);
};

const priceTotal = () => {
    let total = 0;

    CARD_DATA_TEMP.forEach(elm => {
        const regex = /[^\d.]+/g;
        const allPrice = elm.price.replace(regex, '');
        total += parseInt(allPrice);
    });

    totalPrice.textContent = `$${total.toLocaleString('en-US')}`;
};

export const basketComponent = () => {
    btnBasket.addEventListener('click', () => {
        basketOpen();
    });

    btnClose.forEach(element => {
        element.addEventListener('click', () => {
            basketClose();
        });
    });

    addBasket.forEach(btns => {
        btns.addEventListener('click', (event) => {
            const allTabs = document.querySelectorAll(".select-term__card");
            const data = CARD_DATA_TEMP;

            allTabs.forEach(elm => {
                if (elm.classList.contains('--is-select')) {
                    const type = elm.dataset.select.includes('Flex') ? true : false;
                    setCartData(type, elm.dataset.select);
                }
            });

            setDataToStore(data);
            basketOpen();
            dialogBasket.showModal();
        });
    });

    basketInit();
}