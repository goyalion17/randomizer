const btn = document.querySelector(".button");
const inputMin = document.querySelector(".min");
const inputMax = document.querySelector(".max");
const result = document.querySelector(".result");

const randomBtn = function (min, max) {
  min = parseInt(inputMin.value);
  max = parseInt(inputMax.value);
  let res = Math.trunc(Math.random() * (max - min + 1) + min);
  if (!isNaN(min) && !isNaN(max)) {
    result.textContent = res;
  } else {
    result.textContent = "";
  }
};

btn.addEventListener("click", randomBtn);
inputMax.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    randomBtn();
  }
});
