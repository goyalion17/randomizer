const btn = document.querySelector(".button");
const inputMin = document.querySelector(".min");
const inputMax = document.querySelector(".max");
const result = document.querySelector(".result");
const inp = document.querySelectorAll(".inp");

const randomBtn = function (min, max) {
  min = parseInt(inputMin.value);
  max = parseInt(inputMax.value);
  const res = Math.trunc(Math.random() * (max - min + 1) + min);
  !isNaN(min) && !isNaN(max)
    ? (result.textContent = res)
    : (result.textContent = "");
};

btn.addEventListener("click", randomBtn);
inputMax.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    randomBtn();
  }
});