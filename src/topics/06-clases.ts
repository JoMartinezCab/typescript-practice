export class Person {
  constructor(public name: string, private address: string = 'No address') {}
}

/*export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public city: string
  ) {
    super(realName, city);
  }
}*/

export class Hero {
  // public person = Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const person = new Person('Peter', 'New York');
const hero = new Hero('Spiderman', 20, 'Peter', person);

// console.table({ person });
console.log({ hero });
