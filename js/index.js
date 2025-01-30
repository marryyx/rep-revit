let
    mainpush = document.querySelector('.main__push'),

    Elpush = ["🔵", "🔵", "🔵", "🔵"];

Elpush.push("🟣");

mainpush.innerHTML = Elpush.join(' ');

// *************************************

let mainunshift = document.querySelector('.main__unshift');
let array2 = ["🔵", "🔵", "🔵", "🔵"];
array2.unshift("🟣");
mainunshift.innerHTML = array2.join(' ');

// *************************************

let
    mainpop = document.querySelector('.main__pop'),
    array3 = ["🔵", "🟢", "🟡", "🟠"];
array3.pop();
mainpop.innerHTML = array3.join(' ');

// *************************************

let
    mainshift = document.querySelector('.main__shift'),
    array4 = ["🔵", "🟢", "🟡", "🟠"];
array4.shift();
mainshift.innerHTML = array4.join(' ');

// *************************************

let
    mainmap = document.querySelector('.main__map'),
    array5 = ["🔵", "🔵", "🔵", "🔵"];

let newmap = array5.map(() => "🟣");
    // function (elm) {
    //     if (elm === "🔵") {
    //         return "🟣"
    //     }
    //     else {
    //         return "🔵"
    //     }
    // }
mainmap.innerHTML = newmap.join(' ');

// *************************************

let
    mainfilter = document.querySelector('.main__filter'),
    array6 = ["🔵", "🟡", "🔵", "🟠"];
let array6New = array6.filter((elm) => elm === "🔵");
mainfilter.innerHTML = array6New.join(' ');

// *************************************

let
    mainreverse = document.querySelector('.main__reverse'),
    array7 = ["🔵", "🟢", "🟡", "🟠"];
array7.reverse();
mainreverse.innerHTML = array7.join(' ');

// *************************************

let
    mainat = document.querySelector('.main__at'),
    array8 = ["🔵", "🟢", "🟡", "🟠"];
array8.at(2);
mainat.innerHTML = array8.at(2);

// *************************************

let
    mainslice = document.querySelector('.main__slice'),
    array9 = ["🔵", "🟢", "🟡", "🟠"];
mainslice.innerHTML = array9.slice(2).join(' ');

// *************************************