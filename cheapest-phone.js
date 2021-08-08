const phones = [
    { name: 'Samsung', price: 45000, camera: 20, storage: 64 },
    { name: 'Realme', price: 35000, camera: 48, storage: 128 },
    { name: 'Redmi', price: 25000, camera: 32, storage: 64 },
    { name: 'Oppo', price: 15000, camera: 20, storage: 32 },
    { name: 'Htc', price: 8000, camera: 8, storage: 8 },
    { name: 'Nokia', price: 10000, camera: 12, storage: 32 },
    { name: 'iPhone', price: 55000, camera: 20, storage: 64 },
]

function budgetPhone(phones) {
    let cheapest = phones[0];
    for (const mobile of phones) {
        if (mobile.price < cheapest.price) {
            cheapest = mobile;
        }
    }
    return cheapest;
}

const budgetMobile = budgetPhone(phones);
console.log(budgetMobile);