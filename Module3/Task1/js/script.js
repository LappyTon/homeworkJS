// 1
let user = {};

user.userName = "Bogdan";

user.age = 11;

user.showUserName = function() {
    console.log(user.userName)
};
user.updateAge = function() {
    user.age += 1;
    console.log(user.age)
};

// 2
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const sum = function() {
    const sum = salaries.John + salaries.Ann + salaries.Pete;
    console.log(sum); 
};

console.log(sum());

// 3 

const calculator = {
    read(a, b) {
        a = prompt("A=?");
        b = prompt("B=?");
        // const { read, a, b} = calculator;
    },
}

// 4

const cafe= {
    name: "Republic",
    width:200,
    height: 300,
    personal:5,
    hr: true 
}

console.log(Object.entries(cafe));

console.log(cafe.width * cafe.height);