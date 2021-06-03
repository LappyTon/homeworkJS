// 1

const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, ["a"], 222];

console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2] + Arr2[2]);


// 2

Arr1[4] = 22;

console.log(Arr1[0]); 
console.log(Arr1[1]); 
console.log(Arr1[2]); 
console.log(Arr1[3]); 
console.log(Arr1[4]); 

// 3

for (const arr of Arr1) {
    console.log(arr);
}

// 4

const message = "Welcome to Ukraine!"
let messages = message.split("");
console.log(messages);
console.log(messages.indexOf("l"));
messages = messages.join('');
console.log(messages); 

// 5

const style = ["Джаз", "Блюз"];
style.push("Рок-н-ролл");
style[3] = "Класика";
style.shift;
console.log(style[0]);
style.unshift("Реп", "Регі");
console.log(style);