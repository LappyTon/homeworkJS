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


// 5

const add = (...args) => {
    let addedArgs;
    for (const arg of args) {
        addedArgs += arg;
    }
    if (addedArgs / args.length >= 91 || addedArgs / args.length <= 100) {
        console.log("My average score: A");
    } else if (addedArgs / args.length >= 81 || addedArgs / args.length <= 90) {
        console.log("My average score: B");
    } else if (addedArgs / args.length >= 71 || addedArgs / args.length <= 80) {
        console.log("My average score: C");
    } else if (addedArgs / args.length <= 70) {
        console.log("My average score: D");
    };
};
add(100, 80, 30, 100);