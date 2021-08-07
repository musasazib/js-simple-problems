function LargestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {   // Smallest element < largest
            largest = element;
        }
    }
    return largest;
}
const ages = [12, 23, 34, 45, 56, 67, 65, 43, 21];
const oldest = LargestElement(ages);
console.log('Oldest', oldest);