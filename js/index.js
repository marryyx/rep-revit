let mainpush = document.querySelector('.main__push');
Elpush = ["🔵", "🔵", "🔵", "🔵"];
Elpush.push("🟣");

mainpush.innerHTML = Elpush.join(' ');

let mainunshift = document.querySelector('.main__unshift');
array2 = ["🔵", "🔵", "🔵", "🔵"];
array2.unshift("🟣");
mainunshift.innerHTML = array2.join(' ');


let mainpop = document.querySelector('.main__pop');
array3 = ["🔵", "🟢", "🟡", "🟠"];
array3.pop();
mainpop.innerHTML = array3.join(' ');

let mainshift = document.querySelector('.main__shift');
array4 = ["🔵", "🟢", "🟡", "🟠"];
array4.shift();
mainshift.innerHTML = array4.join(' ');

let mainmap = document.querySelector('.main__map');
array5 = ["🔵", "🔵", "🔵", "🔵"];
array5.map["🔵=>🔵=🟣"];
mainmap.innerHTML = array5.join(' ');

let mainfilter = document.querySelector('.main__filter');
const array6 = ["1", "2", "3", "4", "5", "6"];
const arr6new = array6.filter("3");
mainfilter.innerHTML = arr6new.join(' ');

let mainreverse = document.querySelector('.main__reverse');
array7 = ["🔵", "🟢", "🟡", "🟠"];
array7.reverse();
mainreverse.innerHTML = array7.join(' ');

let mainat = document.querySelector('.main__at');
array8 = ["🔵", "🟢", "🟡", "🟠"];
array8.at(2);
mainat.innerHTML = array8.join(' ');

let mainslice = document.querySelector('.main__slice');
array9 = ["🔵", "🟢", "🟡", "🟠"];
array9.slice(2);
mainslice.innerHTML = array9.join(' ');