const btn = document.querySelector(".button");
const inputMin = document.querySelector(".min");
const inputMax = document.querySelector(".max");
const result = document.querySelector(".result");

btn.addEventListener("click", function (min, max) {
  min = inputMin.value;
  max = inputMax.value;
  let res = Math.trunc(Math.random() * (max - min) + min);
  return (result.textContent = res);
});
