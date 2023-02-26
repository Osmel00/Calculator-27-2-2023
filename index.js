//import chalk from 'chalk';
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const table = `
  | Operations |

 1: |add
 2: |subtract
 3: |multiply
 4: |divide
 5: |modulation
 6: |elevate
 7: |sqrt
 8: |percentage
`;
let num1;
let num2;
//console.log(chalk.blue('Hello world!'));
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    if (this.num2 === 0) {
      return chalk.red("Fehler: Error!!!!!!!.");
    }
    return this.num1 / this.num2;
  }
  modulacion() {
    if (this.num2 === 0) {
      return chalk.red("Fehler: Error!!!!!!!.");
    }
    return this.num1 % this.num2;
  }
  elevate() {
    return Math.pow(this.num1, this.num2);
  }
  sqrt(num) {
    return Math.sqrt(num);
  }

  percentage() {
    return `${(this.num1 / this.num2).toFixed(2) * 100}%`;
    
  }
  validate(num) {
    if (isNaN(num)) {
      console.log(chalk.red("Fehler:  muss eine Zahl sein."));
      return false;
    }
    return true;
  }
  aux(str) {
    let num;
    let flag = false;
    do {
      num = prompt(chalk.green(`Gib die ${str} Nummer ein: `));
      flag = this.validate(num);
    } while (flag === false);
    return num;
  }
}
console.log(chalk.blue(table));
let numOperator;
const empty0bj = new Calculator();
do {
  numOperator = prompt("Gib die Operationsnummer ein: ");
} while (
  empty0bj.validate(numOperator) === false ||
  numOperator < 1 ||
  numOperator > 8
);

if (numOperator !== "7") {
  num1 = empty0bj.aux("Erste");
  num2 = empty0bj.aux("Zweite");
}

const Operations = (numOperator) => {
  const calc = new Calculator(parseFloat(num1), parseFloat(num2));
  switch (numOperator) {
    case "1":
      return calc.add();

    case "2":
      return calc.subtract();

    case "3":
      return calc.multiply();

    case "4":
      return calc.divide();

    case "5":
      return calc.modulacion();

    case "6":
      return calc.elevate();

    case "7": {
      let nummer;
      do {
        nummer = prompt(chalk.green("Gib die Nummer ein: "));
      } while (!empty0bj.validate(nummer));
      return calc.sqrt(nummer);
    }

    case "8":
      return calc.percentage();
  }
};

console.log(Operations(numOperator));
