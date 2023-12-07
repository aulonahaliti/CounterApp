let number = document.querySelector("#number");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let count = 0;

number.textContent = count;


function countUp() {
    count =  count +1;
    number.textContent = count;
}

function countDown() {
    count =  count -1;
    number.textContent = count;
}

function countByTen() {
    count =  count +10;
    number.textContent = count;
}

function countByMinusTen() {
    count =  count -10;
    number.textContent = count;
}

function reset() {
    count =  0;
    number.textContent = count;
}



btn1.addEventListener("click", countUp)
btn2.addEventListener("click", countDown)
btn3.addEventListener("click", countByTen)
btn4.addEventListener("click", reset)
btn5.addEventListener("click", countByMinusTen)

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}