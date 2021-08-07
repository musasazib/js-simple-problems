const number = 567.765;
// Math.floor
// Math.ceil
// Math.round

const random = Math.random();
const between10 = random * 10;
const rounded = Math.round(between10);
console.log(rounded);

for (let i = 0; i < 10; i++) {
    const random = Math.random() * 100;
    const selected = Math.round(random);
    console.log(selected); 
}