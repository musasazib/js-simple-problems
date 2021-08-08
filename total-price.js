const products = [
    { name: 'Laptop', price: 65000 },
    { name: 'Shirt', price: 1000 },
    { name: 'Watch', price: 5000 },
    { name: 'Phone', price: 25000 }
]

let totalPrice = 0;
for (product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);


const cart = [
    { name: 'Laptop', price: 65000, quantity: 1 },
    { name: 'Shirt', price: 1000, quantity: 4 },
    { name: 'Watch', price: 5000, quantity: 2 },
    { name: 'Phone', price: 25000, quantity: 1 }
]

let totalCart = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    totalCart = totalCart + productTotal;
}
console.log(totalCart);