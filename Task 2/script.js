/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickBtn = document.getElementById("btn__element");
const counter = document.getElementById("btn__state");
let clicks = 0;

function addClick() {
  clicks += 1;
  counter.textContent = clicks;
}

clickBtn.addEventListener("click", addClick);
