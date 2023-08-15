export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = { name: 'Jorge' };
const passenger2: Passenger = {
  name: 'Natalia',
  children: ['Melissa', 'Vanessa'],
};

const printchildrem = (passenger: Passenger) => {
  const howManyChldren = passenger.children?.length || 0;

  console.log(howManyChldren);
};

printchildrem(passenger2);
printchildrem(passenger1);
