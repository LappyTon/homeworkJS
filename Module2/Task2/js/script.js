// 1
const newFunction1 = function() {
    console.log("Приивіт, JavaScript!");
}
newFunction1();
// 2
const newFunction2 = function(myName) {
    console.log(`Привіт, ${myName}!`);
};
newFunction2("інопланетянин з іншої галактики");

// 3
const mul = function(n, m) {
    console.log(n*m);
    console.log(n+m);
    console.log(n-m);
}
mul(12, 3);

// 4
let box = [];
const myNewArrowFunction = function(...array) {
    for (const arr of array) {
        box.push(arr)
    }
    console.log(box);
}

myNewArrowFunction("I-am", "you-are", "he,she,it-is");

// 5

const myAverageScore = function(array) {
    let total = 0;
    for (const number of array) {
        total += number;
    };

    const score = total / array.length;
    console.log(score);
    if (score >= 91 && score <= 100){
        return "My average score: A";
    } else if (score >= 81 && score <= 90) {
        return "My average score: B";
    } else if (score >= 71 && score <= 80) {
        return "My average score: C";
    } else if (score <= 70) {
        return "My average score: D";
    } 
};

console.log(myAverageScore([100, 75, 81, 96]));

console.log(myAverageScore([45, 63, 85, 70]));

console.log(myAverageScore([77, 82, 60, 58]));

console.log(myAverageScore([93, 99, 93, 96]));