const inputFirst = document.querySelector('#username');
const inputSecond = document.querySelector('#symbol');
const btn = document.querySelector('.button');

const results = document.querySelector('.results')

function replaceNum(text, tmp) {
    const regex = /\d+/g;
    const replaceText = text.replace(regex, tmp);

    if (text === '') {
        alert('Ошибка. Поле пустое!');

        location.reload()
    }

    if (regex.test(tmp)) {
        alert('есть числа во втором инпуте!'); 

        return text;
    }

    return replaceText;
}

btn.addEventListener('click', function () {
    const inputFirstResult = inputFirst.value;
    const inputSecondResult = inputSecond.value;
    const res = replaceNum(inputFirstResult, inputSecondResult);

    results.innerHTML = res;
});