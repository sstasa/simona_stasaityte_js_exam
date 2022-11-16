/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(obj) {
  let keys = Object.entries(obj); //jei reikia TIK keys be values, tai vietoj entries irasyciau keys
  return keys;
}

let keysArr = showObjectKeys(audi);
console.log(`keysArr = `, keysArr);
