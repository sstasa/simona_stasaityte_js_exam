/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum() {
    return this.num1 + this.num2;
  }

  subtraction() {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }

  division() {
    return this.num1 / this.num2;
  }
}

let duSkaiciai = new Calculator(15, 5);
console.log(`duSkaiciai.sum() = `, duSkaiciai.sum());
console.log(`duSkaiciai.subtraction() = `, duSkaiciai.subtraction());
console.log(`duSkaiciai.multiplication() = `, duSkaiciai.multiplication());
console.log(`duSkaiciai.division() = `, duSkaiciai.division());
