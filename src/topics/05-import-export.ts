import { Product, taxCalculation } from './04.1-function-destructuring';

const tax = 0.15;
const shoppingCart: Product[] = [
  {
    description: 'Nokia',
    price: 100,
  },
  {
    description: 'Ipad', 
    price: 200,
  },
];

const [total, taxtotal] = taxCalculation({
  tax: tax,
  products: shoppingCart,
});

console.log('total', total);
console.log('tax', taxtotal);
