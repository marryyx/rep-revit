const html = document.querySelector('html');

const blockNameUser = document.querySelector('.card-personal__value [data-full-name]');

const dialogPersonal = document.querySelector('.profile-form');

const closeBtnDialog = document.querySelector('[data-close-modal-window]');

const cardItems = document.querySelectorAll('.card-personal__item');

const textareaSymbols = document.querySelector('.profile-form__about-panel textarea');
const spanCounterSymbols = document.querySelector('.profile-form__counter-symbol span');

// ----------------------------------------
const USER_AUTH_KEY = 'userAuthData';
// ----------------------------------------

const personalComponent = () => {
    const getUserAuthData = () => {
        const data = localStorage.getItem(USER_AUTH_KEY)
        return JSON.parse(data);
    };
    
    const counterSymbolsInput = () => {
        spanCounterSymbols.textContent = textareaSymbols.value.length;
    };
    
    textareaSymbols.addEventListener('input', () => {
        counterSymbolsInput();
    });
    
    const blockEventOnContent = (parm = false) => {
        const main = document.querySelector('.profile-main');
        const content = document.querySelector('.profile-main__content');
    
        if (!parm) {
            content.classList.remove('gm-not-event');
            main.classList.remove('gm-scroll-hide');
            return
        }
    
        main.classList.add('gm-scroll-hide');
        content.classList.add('gm-not-event');
    };
    
    const activeInfoItem = (elm) => {
        elm.classList.add('--active');
    };
    
    const inActiveInfoItems = () => {
        cardItems.forEach(item => item.classList.remove('--active'));
    };
    
    const showEditForms = (activeForm) => {
        const forms = dialogPersonal.querySelectorAll('.profile-form__section');
    
        dialogPersonal.classList.remove('gm-hide');
    
        forms.forEach(elm => {
            const data = elm.dataset.targetDialog;
    
            (data === activeForm)
                ? elm.classList.remove('gm-hide')
                : elm.classList.add('gm-hide')
        });
    };
    
    const hideEditForms = () => {
        dialogPersonal.classList.add('gm-hide');
    };
    
    cardItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetElement = item.dataset.actionDialog;
            showEditForms(targetElement);
            blockEventOnContent(true);
            activeInfoItem(item);
        });
    });
    
    closeBtnDialog.addEventListener('click', () => {
        hideEditForms();
        inActiveInfoItems();
    
        blockEventOnContent(false);
    });
    
    window.addEventListener('DOMContentLoaded', () => {
        const dataUser = getUserAuthData();
    
        if (dataUser) {
            dataUser.forEach(item => {
                blockNameUser.textContent = `${item.usernameFirst} ${item.usernameLast}`;
            });
        }
    });
}

export { personalComponent }