import { PLAN_PRICE } from '../store/pricing.js'

const CARD_DATA_TEMP = [];
const CARD_STORE_KEY = 'basketItem';

const btnBasket = document.querySelector('.header__btn-basket');
const dialogBasket = document.querySelector('.basket');

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

const basketCounet = () => {
    const count = CARD_DATA_TEMP.length;
    btnBasket.dataset.basketCounter = count;
};

const addToBasket = (data) => {
    const { id, type, term, quanity, price } = data;
    const basketContent = document.querySelector('.basket__content');
    const typeImage = type ? 'coins.png' : 'revit.png';
    const typeCaption = type ? 'Flex' : 'Revit';

    const basket =
        `<div class="basket__content-card" data-item-id="${id}">
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

    const elm = document.querySelector(`[data-item-id="${id}"]`);
    const removeBtn = elm.querySelector('.btn-remove');

    removeBtn.addEventListener("click", () => {
        removeCardItem(id);
        elm.remove();
    });

    basketCounet();
    priceTotal();
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
    const leng = CARD_DATA_TEMP.length;
    const newObg = { id: (leng + 1), type: typeParm, ...PLAN_PRICE[key] }
    CARD_DATA_TEMP.push(newObg);
};

const removeCardItem = (id) => {
    const newData = CARD_DATA_TEMP.filter(elm => elm.id !== id);

    CARD_DATA_TEMP.length = 0;
    CARD_DATA_TEMP.push(...newData);
    
    setDataToStore(CARD_DATA_TEMP);
    priceTotal();
    basketCounet();
};

const loadingMode = () => {
    const wrapBasketLoader = document.querySelector('.basket__wrap');

    setTimeout(() => {
        wrapBasketLoader.classList.remove('--loading');
    }, 1000);
};

const updateCartDateOfStore = () => {
    const storeDate = getDataOfStore();

    if (!storeDate) return
    CARD_DATA_TEMP.push(...storeDate);

    basketCounet();
}

const setDataToStore = (data) => {
    localStorage.setItem(CARD_STORE_KEY, JSON.stringify(data));
};

const getDataOfStore = () => {
    const data = localStorage.getItem(CARD_STORE_KEY);
    return JSON.parse(data);
};

const priceTotal = () => {
    const totalPrice = document.querySelector('.basket__total');
    let total = 0;

    CARD_DATA_TEMP.forEach(elm => {
        const regex = /[^\d.]+/g;
        const allPrice = elm.price.replace(regex, '');
        total += parseInt(allPrice);
    });

    totalPrice.textContent = `$${total.toLocaleString('en-US')}`;
};

const init = () => {
    const btnAddToCart = document.querySelectorAll('[data-action-add-cart]');
    const btnClose = document.querySelectorAll('[closeBasket]');

    updateCartDateOfStore();

    btnBasket.addEventListener('click', () => {
        basketOpen();
    });

    btnClose.forEach(element => {
        element.addEventListener('click', () => {
            basketClose();
        });
    });

    btnAddToCart.forEach(btns => {
        btns.addEventListener('click', (event) => {
            const allTabs = document.querySelectorAll(".select-term__card");

            allTabs.forEach(elm => {
                if (elm.classList.contains('--is-select')) {
                    const type = elm.dataset.select.includes('Flex') ? true : false;
                    setCartData(type, elm.dataset.select);
                }
            });

            setDataToStore(CARD_DATA_TEMP);
            basketOpen();
        });
    });
};

export const basketComponent = () => {
    init();
}