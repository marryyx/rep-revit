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
        assistantChat.classList.toggle('gm-hide');
        contentHeight.classList.toggle('--full');
    };

    const openAssistantWindow = () => {
        assistantChat.classList.remove('gm-hide');
        isOpen = false;
    };

    const closeAssistantWindow = () => {
        assistantChat.classList.add('gm-hide');
        endChatWindow.classList.add('gm-hide');
        isOpen = true;
    };

    function reportWindowSize() {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 430) {
            messageAssistant.classList.add('gm-hide');
        }
    }

    reportWindowSize();
    window.addEventListener("resize", () => {
        reportWindowSize();
    });

    // const assistantWindow = () => {
    //     if (isOpen === true) {
    //         console.log('true');
    //     } else {
    //         console.log('false');
    //     }
    // };

    messageAssistantClose.addEventListener('click', () => {
        messageAssistant.classList.add('gm-hide')
    });

    buttonFullScreen.addEventListener('click', () => {
        fullScreen();
    });

    btnAssistant.addEventListener('click', () => {
        assistantWelcome.classList.add('gm-hide');
        messageAssistant.classList.add('gm-hide')
        openAssistantWindow()
    });

    btnAssistantClose.addEventListener('click', () => {
        assistantWelcome.classList.remove('gm-hide');
        endChatWindow.classList.remove('gm-hide');

        assistantChat.classList.remove('--full');
        assistantChat.classList.remove('--full');
    });

    endChatNoButton.addEventListener('click', () => {
        endChatWindow.classList.add('gm-hide');
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