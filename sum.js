const numbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([10 + 20 + 30]);
console.log(total);