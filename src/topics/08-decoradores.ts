function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'Override';
  };
}

@classDecorator
export class SuperClass {
  public myroperty: string = 'Abc123';

  print() {
    console.log('Hola mundo');
  }
}

console.log(SuperClass);
const myclass = new SuperClass();
console.log(myclass);
