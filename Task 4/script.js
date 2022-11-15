/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");
let cars = [];

function getCars(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.warn("klaida getCars", err));
}

async function mainInit() {
  cars = await getCars(ENDPOINT);
  console.log(`cars = `, cars);
  cars.forEach((manufacturer) => {
    displayCars(manufacturer);
  });
}

mainInit();

function displayCars(obj) {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  const brandEl = document.createElement("h3");
  brandEl.textContent = obj.brand;
  const modelsArr = obj.models;
  cardEl.append(brandEl);
  modelsArr.forEach((model) => {
    const modelsEl = document.createElement("li");
    modelsEl.textContent += model;
    cardEl.append(modelsEl);
  });
  outputEl.append(cardEl);
}
