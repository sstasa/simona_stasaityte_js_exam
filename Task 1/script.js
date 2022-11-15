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
  let convertToLb = kg * 2.2046;
  let convertToG = kg / 0.001; //prettieris nuima galinius nulius nuo sito, bet nemanau kad tai problema
  let convertToOz = kg * 35.274;
  console.log(`convertToLb = `, convertToLb);
  console.log(`convertToG = `, convertToG);
  console.log(`convertToOz = `, convertToOz);
  outputEl.textContent = `${kg}kg = ${convertToLb}lb | ${kg}kg = ${convertToG}g | ${kg}kg = ${convertToOz}oz`;
}

calcBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  switch (search.value > 0) {
    case false:
      outputEl.textContent = "Įveskite svorį!";
      break;
    case true:
      convertWeight(search.value);
      break;
  }
});
