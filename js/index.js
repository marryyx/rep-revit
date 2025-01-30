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
    },
    firstFlex: {
        price: '$300',
        description: 'Buy tokens'
    },
    secondFlex: {
        price: '$1,500',
        description: 'Buy tokens'
    },
    thirdFlex: {
        price: 'Varies',
        description: 'Estimate tokens needed'
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

    const btnDesk = PLAN_PRICE[key].description;

    btnInfo.innerHTML = btnDesk;
    priceBlock.innerHTML = price;
    deskBlock.textContent = description;
};

const updateContentOfPlan = (elm) => {
    const pricePlans = elm.querySelector('p');
    const key = elm.dataset.select;

    pricePlans.textContent = PLAN_PRICE[key].price;
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

const getBasketCounter = () => {
    return parseInt(btnBasket.dataset.basketCounter);
};

const setBasketCounter = (count) => {
    btnBasket.dataset.basketCounter = count;
};

addBasket.addEventListener('click', () => {
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
                </div>`;

    basketContent.insertAdjacentHTML("beforeend", basket);

    const itemsLenght = basketContent.querySelectorAll('.basket__content-card').length;
    setBasketCounter(itemsLenght);
};

const btnVideoFirst = document.querySelector('.collection-video-btn-1');
const btnVideoSecond = document.querySelector('.collection-video-btn-2');
const closeVideo = document.querySelectorAll('.video-close');
const dialogVideoFirst = document.querySelector('.video-first');
const dialogVideoSecond = document.querySelector('.video-second');
const vid = document.querySelector('.video');
const vidTwo = document.querySelector('.video-two');

btnVideoFirst.addEventListener('click', () => {
    dialogVideoFirst.showModal();
});

closeVideo.forEach(element => {
    element.addEventListener('click', () => {
        dialogVideoFirst.close();
        vid.pause();
    });
});

btnVideoSecond.addEventListener('click', () => {
    dialogVideoSecond.showModal();
});

closeVideo.forEach(element => {
    element.addEventListener('click', () => {
        dialogVideoSecond.close();
        vidTwo.pause();
    });
});

const video = document.querySelectorAll('.ar-imagine__image-video img');
const footerVideos = document.querySelectorAll('.ar-imagine__footer');
const videos = document.querySelectorAll('.ar-imagine__video');

const clearSelectVideo = (element, newClass) => {
    element.forEach(elm => {
        elm.classList.remove(newClass);
    });
};

const selectVideoTab = (name, content, classHide) =>
    content.forEach(item => {
        const videoFooter = item.dataset.video

        if (name != videoFooter) {
            item.classList.add(classHide)
        } else {
            item.classList.remove(classHide)
        }
    });


video.forEach(element => {
    element.addEventListener("click", () => {
        clearSelectVideo(video, '--select')
        element.classList.add('--select');

        const tabVideo = element.dataset.video;
        selectVideoTab(tabVideo, videos, '--hide-video');
        selectVideoTab(tabVideo, footerVideos, '--hide');
    });
});


// const openAssistant = () => {
//     const autodeskWidget = document.querySelector('.autodesk-widget')

//     const assistant =
//     `<div class="autodesk-widget__layout">
//         <div class="autodesk-widget__header">
//             <span class="header-title">Autodesk Assistant</span>
//             <span class="ari-close"></span>
//         </div>
//         <div class="autodesk-widget__content">
//             <div class="content__card">Hi, I’m Autodesk Assistant. I can help with product selection, purchasing,
//                 and support. If needed, you can also request an agent at any time via the input bar.</div>
//             <div class="content__card">I use AI to recommend solutions. I’m still learning, so please leave feedback
//                 to help me improve my answers.</div>
//             <div class="content__card">Please describe your question in detail using complete sentences, and mention
//                 product name and version, if applicable.
//                 <details class="content-card__bottom">
//                     <summary class="content__example">Show examples</summary>
//                     <p>You can say something like:</p>
//                     <p>What can Revit do?</p>
//                     <p>How do Flex tokens work?</p>
//                     <p>How do I download my AutoCAD trial?</p>
//                     <p>I’m using Maya 2024 and autosave isn't working.</p>
//                     <p>I’m an Architect looking for something to help me model 3D design concepts.</p>
//                 </details>
//             </div>
//         </div>
//         <div class="autodesk-widget__footer">
//             <input type="text" placeholder="Rephrase or ask another question">
//             <button><span class="ari-send"></span></button>
//         </div>
//     </div>`;

//     autodeskWidget.insertAdjacentHTML("beforeend", assistant);
    
// };

const btnAssistant = document.querySelector('.au-assi')
const autodeskWidgetLayot = document.querySelector('.autodesk-widget__layout')
const btnAssistantClose = document.querySelector('.autodesk-widget__header .ari-close')

btnAssistant.addEventListener('click', () => {
    btnAssistant.classList.add('--hide');
    autodeskWidgetLayot.classList.remove('--hide');
});

btnAssistantClose.addEventListener('click', () => {
    btnAssistant.classList.remove('--hide');
    autodeskWidgetLayot.classList.add('--hide');
});

const inputContent = document.querySelector('.autodesk-widget__input');
const sendInput = document.querySelector('.button-send')
const contentCard = document.querySelector('.content__card-user')

const inputContentCard = (content) => {
    const userMessage = `<div class="message-user">${content}</div>`;
    contentCard.insertAdjacentHTML("beforeend", userMessage);
}

sendInput.addEventListener('click', () => {
    inputContentCard(inputContent.value);
});