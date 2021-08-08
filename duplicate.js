const names = ['abul', 'babul', 'cabul', 'ebul', 'abul', 'dabul', 'babul', 'abul', 'fabul', 'gabu', 'cabul', 'habul'];

function duplicateName(names) {
    const unique = [];
    for (const elements of names) {
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
    } return unique;
}
const uniqueNames = duplicateName(names);
console.log(uniqueNames);


const numbers = [12, 23, 34, 56, 67, 77, 34, 89, 12, 90, 23];

function removeNumbers(numbers) {
    const numberCount = [];
    for (const elements of numbers) {
        if (numberCount.indexOf(elements) == -1) {
            numberCount.push(elements);
        }
    }
    return numberCount;
}
const countNumbers = removeNumbers(numbers);
console.log(countNumbers);