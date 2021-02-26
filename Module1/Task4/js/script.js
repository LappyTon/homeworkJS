// 1.
let number = prompt("Введите число");
number = Number.parseInt(number);
console.log(number);

if (number > 99 || number < 33) {
    console.log( "Число потрапляє в діапазон")
} else {
    console.log( "Число не потрапляє в діапазон")
}
// 2.
const Maxim = 55;

const child = 16;
const normal = 60;
const old = 100;

let MaximAge;

if (Maxim < child) {
    MaximAge = "Малюк";
} else if (Maxim < normal || Maxim > child) {
    MaximAge = "Дорослий";
} else if (Maxim < old || Maxim > teenager) {
    MaximAge = "Старий";
};
console.log("Максим " + MaximAge);

// 3.
const myName = "Bob";
const mySurname = "Miken";
if (myName > 4 || mySurname > 5){
    console.log(myName.length);
    console.log(mySurname.length);
} else {
    console.log("УПС...");
};

// 4.

let random = Math.floor(Math.random() * 5) + 1;

if (random = 1) {
    console.log("Random number = 1")  
} else if (random = 2) {
    console.log("Random number = 2")  
} else if (random = 3) {
    console.log("Random number = 3")  
} else if (random = 4) {
    console.log("Random number = 4")  
} else if (random = 5) {
    console.log("Random number = 5")  
};

// 5
let lang = "en";

let month;

switch (lang) {
    case "fr":
        month = "Janvier";
        break;
    
    case "en":
        month = "January";
        break;

    case "ru":
        month = "Январь";

    case "ua":
        month = "Січень";

    default: "Inalid month";
}

console.log(month);
