

// const someString = document.querySelector('.bottom__string');

// function replaceNumbers(str) {
//     const regex = /\d+/g; 
//     return str.replace(regex, '&');
// };

// let str = "У меня есть 10 грн и 70 коп.";
// let replaceStr = replaceNumbers(str);

// someString.innerHTML = replaceStr;

const inputFirst = document.querySelector('.main__input');
const inputSecond = document.querySelector('.main__input__second');
const btn = document.querySelector('.button');

function replaceNum() {
    const regex = /\d+/g;
    let replaceText = inputFirst.value.replace(regex, inputSecond.value);
    inputFirst.value = replaceText;
}

btn.addEventListener('click', function() {
    replaceNum();
});