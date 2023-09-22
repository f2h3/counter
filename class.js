let count = 0;

let countLabel = document.querySelector("#countLabel");
let decreasebtn = document.querySelector("#decreaseBtn");
let resetBtn = document.querySelector("#resetBtn")
let increaseBtn = document.querySelector("#increaseBtn");

decreasebtn.addEventListener("click", () => {
    count -= 1;
    countLabel.innerHTML = count;
})

resetBtn.addEventListener("click", () => {
    count = 0;
    countLabel.innerHTML = count;
})

increaseBtn.addEventListener("click", () => {
    count += 1;
    countLabel.innerHTML = count;
})