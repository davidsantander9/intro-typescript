import { calcISV, Product } from "./06-fun-desestructuring";

const carritoCompras: Product[] = [
    {
        desc: 'phone 1',
        price: 100
    },
    {
        desc: 'phone 2',
        price: 200
    },
];

const [ total , isv ] = calcISV(carritoCompras);

console.log(total, isv);