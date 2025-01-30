export const assistantComponent = () => {

    const btnAssistant = document.querySelector('.au-assi__container')
    const auAssi = document.querySelector('.au-assi')
    const autodeskWidget = document.querySelector('.autodesk-widget')
    const btnAssistantClose = document.querySelector('.autodesk-widget__header .ari-close')

    const messageAssistant = document.querySelector('.au-assi__welcome')
    const messageAssistantClose = document.querySelector('.au-assi__top .au-assi-close')

    const buttonFullScreen = document.querySelector('.autodesk-widget__header .ari-fullscreen');
    const headerFullClass = document.querySelector('.autodesk-widget__header .header-title');

    const contentHeight = document.querySelector('.autodesk-widget__content');

    const endChatWindow = document.querySelector('.autodesk-widget-end-chat');
    const endChatYesButton = document.querySelector('.autodesk-widget-end-chat__btn.--black');
    const endChatNoButton = document.querySelector('.autodesk-widget-end-chat__btn.--white');

    let isOpen = false;

    const fullScreen = () => {
        autodeskWidget.classList.toggle('--full');
        headerFullClass.classList.toggle('--full');
        contentHeight.classList.toggle('--full');
    };

    const openAssistantWindow = () => {
        autodeskWidget.classList.remove('--hide');
        isOpen = false;
    };

    const closeAssistantWindow = () => {
        autodeskWidget.classList.add('--hide');
        endChatWindow.classList.add('--hide');
        isOpen = true;
    };

    // const assistantWindow = () => {
    //     if (isOpen === true) {
    //         console.log('true');
    //     } else {
    //         console.log('false');
    //     }
    // };

    messageAssistantClose.addEventListener('click', () => {
        messageAssistant.classList.add('--close')
    });

    buttonFullScreen.addEventListener('click', () => {
        fullScreen();
    });

    btnAssistant.addEventListener('click', () => {
        auAssi.classList.add('--hide');
        messageAssistant.classList.add('--close')
        openAssistantWindow()
    });

    btnAssistantClose.addEventListener('click', () => {
        auAssi.classList.remove('--hide');
        endChatWindow.classList.remove('--hide');

        autodeskWidget.classList.remove('--full');
        autodeskWidget.classList.remove('--full');
        headerFullClass.classList.remove('--full');

    });

    endChatNoButton.addEventListener('click', () => {
        endChatWindow.classList.add('--hide');
    });

    endChatYesButton.addEventListener('click', () => {
        closeAssistantWindow()
    });

    const inputContent = document.querySelector('.autodesk-widget__input');
    const sendInput = document.querySelector('.button-send')
    const contentCard = document.querySelector('.content__card-user')

    const inputContentCard = (content) => {
        if (!content) return
        const userMessage = `<div class="message-user">${content}</div>`;
        contentCard.insertAdjacentHTML("beforeend", userMessage);
    }

    sendInput.addEventListener('click', () => {
        inputContentCard(inputContent.value);
        inputContent.value = '';
    });
}