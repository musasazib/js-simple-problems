const business = 600;
const minister = 500;
const army = 700;

// compare 2 ----------------
if (business > minister) {
    console.log('Business parson is bigger');
}
else {
    console.log('Minister parson is bigger')
}

// Compare 3 ---------------------
if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('Minister is bigger');
}
else {
    console.log('Army is bigger');
}


var max = Math.max(business, minister, army);
console.log('Largest is', max);

// function -----------------
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const Largest = findLargest(150, 200);
console.log('Largest number', Largest);

// Find the smallest of number ---------------
function getLargest(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const result = getLargest(20, 30, 10);
console.log(result)