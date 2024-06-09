// js min

const megaBtn = document.getElementById("megabtn");
const decreaseBtn = document.getElementById("decreasebtn");
const increaseBtn = document.getElementById("increasebtn");
const resetBtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}

megaBtn.onclick = function () {
    count + 100;
    countLabel.textContent = count;
}