import { PLAN_PRICE } from '../store/pricing.js'

const btnBasket = document.querySelector('.header__btn-basket');
const btnClose = document.querySelectorAll('[closeBasket]');
const dialogBasket = document.querySelector('.basket');
const CARD_DATA_TEMP = [];

const addBasket = document.querySelectorAll('[data-action-add-cart]');
const basket = document.querySelector('.header__btn-basket');
const totalPrice = document.querySelector('.basket__total')

const getBasketCounter = () => {
    return parseInt(btnBasket.dataset.basketCounter);
};

const setBasketCounter = (count) => {
    btnBasket.dataset.basketCounter = count;
};

const addToBasket = (data) => {
    const { type, term, quanity, price } = data;
    const basketContent = document.querySelector('.basket__content')
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

    if (savedItem) {
        savedItem.forEach(item => {
            addToBasket(item);
        });
    }

    priceTotal();
};

const setCartData = (typeParm, key) => {
    const newObg = { type: typeParm, ...PLAN_PRICE[key] }
    CARD_DATA_TEMP.push(newObg);
};

const setDataToStore = (data) => {
    localStorage.setItem('basketItem', JSON.stringify(data));
    addToBasket(data);
};

const loader = document.querySelector('.loader')
const wrapBasketLoader = document.querySelector('.basket__wrap');
const loadingMode = () => {
    setTimeout(() => {
        wrapBasketLoader.classList.remove('--loading');
        loader.remove()
    }, "1000");
};

const getDataOfStore = () => {
    const data = localStorage.getItem('basketItem');
    return JSON.parse(data);
};

const priceTotal = () => {
    let total = 0;
    const data = CARD_DATA_TEMP;

    data.forEach(elm => {
        const regex = /[^\d.]+/g;
        const allPrice = elm.price.replace(regex, '');
        total += parseInt(allPrice);
    });

    totalPrice.textContent = `$${total.toLocaleString('en-US')}`;
    console.log('total', total)
};

export const basketComponent = () => {
    btnBasket.addEventListener('click', () => {
        loadingMode();
        dialogBasket.showModal();
    });

    btnClose.forEach(element => {
        element.addEventListener('click', () => {
            dialogBasket.close();
            wrapBasketLoader.classList.add('--loading')
        });
    });

    const getBasketCounter = () => {
        return parseInt(btnBasket.dataset.basketCounter);
    };

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
            loadingMode();
            dialogBasket.showModal();
        });
    });

    basketInit();
}