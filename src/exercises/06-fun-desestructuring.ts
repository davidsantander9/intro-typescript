export interface Product{
    desc: string;
    price: number;
}

const phone: Product = {
    desc: 'Nokia A1',
    price: 150,
}

const tablet: Product = {
    desc: 'iPad',
    price: 350,
}

export function calcISV( products: Product[]):[number, number] {
    let total: number = 0;
    products.forEach( ({ price }) => {
        total += price;
    })
    return [total, total * 0.15];
}

const articles = [ phone, tablet ];

const [total, isv] = calcISV(articles);
console.log(total, isv);