export const assistantComponent = () => {

    const btnAssistant = document.querySelector('.assistant-welcome__container')
    const assistantWelcome = document.querySelector('.assistant-welcome')
    const assistantChat = document.querySelector('.assistant-chat')
    const btnAssistantClose = assistantChat.querySelector('[data-chat-close-btn]')

    const messageAssistant = document.querySelector('.assistant-welcome__card')
    const messageAssistantClose = assistantWelcome.querySelector('[data-close-btn]')

    const buttonFullScreen = assistantChat.querySelector('[data-chat-fullscreen-btn]');

    const contentHeight = document.querySelector('.assistant-chat__content');

    const endChatWindow = document.querySelector('.assistant-chat-end');
    const endChatYesButton = assistantChat.querySelector('[data-assistant-btn-yes]');
    const endChatNoButton = assistantChat.querySelector('[data-assistant-btn-no]');

    let isOpen = false;

    const fullScreen = () => {
        assistantChat.classList.toggle('--full');
        contentHeight.classList.toggle('--full');
    };

    const openAssistantWindow = () => {
        assistantChat.classList.remove('--hide');
        isOpen = false;
    };

    const closeAssistantWindow = () => {
        assistantChat.classList.add('--hide');
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
        assistantWelcome.classList.add('--hide');
        messageAssistant.classList.add('--close')
        openAssistantWindow()
    });

    btnAssistantClose.addEventListener('click', () => {
        assistantWelcome.classList.remove('--hide');
        endChatWindow.classList.remove('--hide');

        assistantChat.classList.remove('--full');
        assistantChat.classList.remove('--full');
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