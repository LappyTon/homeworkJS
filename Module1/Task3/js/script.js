// 1.
const k1 = Number.parseInt("5px");
const k2 = Number.parseInt("12djd334");
const k3 = Number.parseInt("12.45asdwe12");
const k4 = Number.parseInt("qwqweeewq");
// Приводжу все до цілого числа

// 2.
const k5 = Number.parseFloat("5px");
const k6 = Number.parseFloat("12djd334");
const k7 = Number.parseFloat("12.45asdwe12");
const k8 = Number.parseFloat("qwqweeewq");

// Приведення до дробового числа


// 3.
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// Найбільше і найменше число


// 4.
console.log(Math.floor(Math.random() * (19 - 3) + 3));

// Випадкове число між 3 і 19;


// 5.
const result = 5 + 5 + "5";
// Створив змінну результ
console.log(result);
// Вивів в консоль
console.log(typeof result);
// Вивів в консоль тип результ

// 6.
const email = "lappyton@gmail.com";

console.log(email.includes("@"));

console.log(email.length);

// Цей скрипт знаходить @ і виводить довжину emailа


// 7.
const my = "My ";

const Name = "name ";

const is = "is ";

let fullName = my + Name + is;

fullName = fullName + "Viktor";

console.log(fullName);

// Ми добавляємо змінні в змінну і вивиодмо результат в консоль


// 8.
const UserName = "Danylo"

const payment = "40000$"

alert(`Добридень, ${UserName}, дякуємо за те, що ви пожертвували на благдійнісьть ${payment}. Дай Боже вам щастя!`)

// Створили змінні і вписаи їх в Alert