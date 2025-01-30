export const assistantContent = () => {

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

const btnAssistant = document.querySelector('.au-assi__container')
const auAssi = document.querySelector('.au-assi')
const autodeskWidget = document.querySelector('.autodesk-widget')
const btnAssistantClose = document.querySelector('.autodesk-widget__header .ari-close')

const messageAssistant = document.querySelector('.au-assi__welcome')
const messageAssistantClose = document.querySelector('.au-assi__top .au-assi-close')

const buttonFullScreen = document.querySelector('.autodesk-widget__header .ari-fullscreen')
const HeaderFullClass = document.querySelector('.autodesk-widget__header .header-title')

messageAssistantClose.addEventListener('click', () => {
    messageAssistant.classList.add('--close')
});

buttonFullScreen.addEventListener('click', () => {
    autodeskWidget.classList.add('--full');
    HeaderFullClass.classList.add('--full');
});

btnAssistant.addEventListener('click', () => {
    auAssi.classList.add('--hide');
    messageAssistant.classList.add('--close')
    autodeskWidget.classList.remove('--hide');
});

btnAssistantClose.addEventListener('click', () => {
    auAssi.classList.remove('--hide');
    autodeskWidget.classList.add('--hide');
    autodeskWidget.classList.remove('--full');
    HeaderFullClass.classList.remove('--full');
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
}