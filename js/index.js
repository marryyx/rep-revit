const roudedFigObg = {
    one: ["🔵", "🔵", "🔵", "🔵"],
    two: ["🔵", "🟢", "🟡", "🟠"],
    three: ["🔵", "🟡", "🔵", "🟠"],
    four: ["1", "32", "5", "12", "27"],
};

const arrayMethod = (arr, arrayMethod, elm) => {

    const arrNew = [...arr];
    const houseElm = document.querySelector(elm);

    if (arrayMethod === 'push') {
        arrNew.push("🟣");
        houseElm.innerHTML = arrNew.join(" ");
    }

    if (arrayMethod === 'unshift') {
        arrNew.unshift("🟣");
        houseElm.innerHTML = arrNew.join(" ");
    }

    if (arrayMethod === 'pop') {
        arrNew.pop();
        houseElm.innerHTML = arrNew.join(" ");
    }

    if (arrayMethod === 'shift') {
        arrNew.shift();
        houseElm.innerHTML = arrNew.join(" ");
    }

    if (arrayMethod === 'map') {
        const map = arrNew.map((elm) => elm === "🔵" ? "🟣" : "🔵");
        houseElm.innerHTML = map.join(" ");
    }

    if (arrayMethod === 'filter') {
        const filter = arrNew.filter((elm) => elm === "🔵");
        houseElm.innerHTML = filter.join(" ");
    }

    if (arrayMethod === 'reverse') {
        arrNew.reverse((elm) => elm === "🔵");
        houseElm.innerHTML = arrNew.join(" ");
    }

    if (arrayMethod === 'at') {
        houseElm.innerHTML = arrNew.at(2);
    }

    if (arrayMethod === 'slice') {
        houseElm.innerHTML = arrNew.slice(2).join(" ");
    }

    if (arrayMethod === 'sort') {
        arrNew.sort(function(a, b){return a-b});
        houseElm.innerHTML = arrNew.join(" ");
    }

};

arrayMethod(roudedFigObg.one, 'push', '.main__push');
arrayMethod(roudedFigObg.one, 'unshift', '.main__unshift');

arrayMethod(roudedFigObg.two, 'pop', '.main__pop');
arrayMethod(roudedFigObg.two, 'shift', '.main__shift');

arrayMethod(roudedFigObg.one, 'map', '.main__map');

arrayMethod(roudedFigObg.three, 'filter', '.main__filter');

arrayMethod(roudedFigObg.two, 'reverse', '.main__reverse');
arrayMethod(roudedFigObg.two, 'at', '.main__at');
arrayMethod(roudedFigObg.two, 'slice', '.main__slice');

arrayMethod(roudedFigObg.four, 'sort', '.main__sort');

//////////////////////////////////////////////////////

const numbers = ["3", "-5", "1.5", "10", "4"];

const arrayNum = document.querySelector('.math__array');
arrayNum.innerHTML = numbers.join(", ");

const absNum = document.querySelector('.math__abs');
const absoluteValue = Math.abs(-10);
absNum.innerHTML = absoluteValue;

const ceilNum = document.querySelector('.math__ceil');
const ceilValue = Math.ceil(3.2);
ceilNum.innerHTML = ceilValue;

const floorNum = document.querySelector('.math__floor');
const floorValue = Math.floor(4.7);
floorNum.innerHTML = floorValue;

const maxNum = document.querySelector('.math__max');
const maxValue = Math.max(...numbers);
maxNum.innerHTML = maxValue;

const minNum = document.querySelector('.math__min');
const minValue = Math.min(...numbers);
minNum.innerHTML = minValue;

const powNum = document.querySelector('.math__pow');
const powValue = Math.pow(3,2);
powNum.innerHTML = powValue;

const randomNum = document.querySelector('.math__random');
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
randomNum.innerHTML = getRandomInt(3);

const roundNum = document.querySelector('.math__round');
const roundValue = Math.round(3.7);
roundNum.innerHTML = roundValue;


const sqrtNum = document.querySelector('.math__sqrt');
const sqrtValue = Math.sqrt(9);
// const sqrtValue = Math.sqrt(-9); - будет выводить: Nan
sqrtNum.innerHTML = sqrtValue;

//////////////////////////////////////////////////////////

const someString = document.querySelector('.bottom__string');

function replaceNumbers(str) {
    const regex = /\d+/g; 
    return str.replace(regex, '&');
};

let str = "У меня есть 10 грн и 70 коп.";
let replaceStr = replaceNumbers(str);

someString.innerHTML = replaceStr;

