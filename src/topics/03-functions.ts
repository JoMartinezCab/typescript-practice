function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

// const result: number = addNumbers(1, 2);
// const resultArrow: string = addNumbersArrow(5, 2);
// const resultMultiply: number = multiply(5);

// console.log({ result, resultArrow, resultMultiply });

interface character {
  name: string;
  hp: number;
  showHp: () => void;
}

const heal = (character: character, amount: number) => {
  character.hp += amount;
  character.showHp();
};

const strider: character = {
  name: 'Aragon',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

strider.showHp();
heal(strider, 20);

export {};
