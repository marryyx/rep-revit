export const assistantComponent = () => {

    const btnAssistant = document.querySelector('.assistant-welcome__container')
    const auAssi = document.querySelector('.assistant-welcome')
    const autodeskWidget = document.querySelector('.assistant-chat')
    const btnAssistantClose = document.querySelector('.assistant-chat__header .ari-close')

    const messageAssistant = document.querySelector('.assistant-welcome__card')
    const messageAssistantClose = document.querySelector('.assistant-welcome__top .assistant-welcome-close')

    const buttonFullScreen = document.querySelector('.assistant-chat__header .ari-fullscreen');

    const contentHeight = document.querySelector('.assistant-chat__content');

    const endChatWindow = document.querySelector('.assistant-chat-end');
    const endChatYesButton = document.querySelector('.assistant-chat-end__btn.--black');
    const endChatNoButton = document.querySelector('.assistant-chat-end__btn.--white');

    let isOpen = false;

    const fullScreen = () => {
        autodeskWidget.classList.toggle('--full');
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

    const inputContent = document.querySelector('.assistant-chat__input');
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