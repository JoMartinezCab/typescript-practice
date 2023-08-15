export interface Product {
  description: string;
  price: number;
}

interface taxCalculaionOtions {
  tax: number;
  products: Product[];
}

export function taxCalculation(options: taxCalculaionOtions): [number, number] {
  let total = 0;
  const { tax, products } = options;

  products.forEach(({ price }) => (total += price));

  return [total, total * tax];
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'Ipad air',
  price: 250,
};

const tax: number = 0.15;
const shoppingCart: Product[] = [phone, tablet];
const [total, taxTotal] = taxCalculation({
  tax: tax,
  products: shoppingCart,
});

console.log(`Total: ${total}`);
console.log('tax: ', taxTotal);
