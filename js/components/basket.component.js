export const basketComponent = () => {

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

    const getBasketCounter = () => {
        return parseInt(btnBasket.dataset.basketCounter);
    };

    const setBasketCounter = (count) => {
        btnBasket.dataset.basketCounter = count;
    };

    addBasket.addEventListener('click', () => {
        addToBasket('Flex', '1 year', 100, 300);
        dialogBasket.showModal();
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
        
        localStorage.setItem(basketContent, itemsLenght);
    };
}