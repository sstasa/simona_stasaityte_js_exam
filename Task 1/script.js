/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274
Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const outputEl = document.getElementById("output");
const calcBtnEl = document.getElementById("submit-btn");
const kgInputEl = document.getElementById("search");

function convertWeight(kg) {
  outputEl.textContent = "";
  let convertToLb = kg * 2.2046;
  let convertToG = kg / 0.001; //prettieris nuima galinius nulius nuo sito, bet nemanau kad tai problema
  let convertToOz = kg * 35.274;
  console.log(`convertToLb = `, convertToLb);
  console.log(`convertToG = `, convertToG);
  console.log(`convertToOz = `, convertToOz);
  //creating html elements
  const kgEl = document.createElement("h2");
  kgEl.textContent = `${kg}kg =`;
  const convertedEl = document.createElement("div");
  const lbEl = document.createElement("p");
  lbEl.textContent = `${convertToLb} lb`;
  const gEl = document.createElement("p");
  gEl.textContent = `${convertToG} g`;
  const ozEl = document.createElement("p");
  ozEl.textContent = `${convertToOz} oz`;
  outputEl.append(kgEl, convertedEl);
  convertedEl.append(lbEl, gEl, ozEl);
}

calcBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (search.value > 1e29) {
    outputEl.textContent = "Per didelis skaičius!";
    return;
  }
  switch (search.value > 0) {
    case false:
      outputEl.textContent = "Įveskite svorį (be raidžių)!";
      break;
    case true:
      convertWeight(search.value);
      break;
  }
});
