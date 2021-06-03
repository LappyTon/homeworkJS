// 1 
console.log(1);
console.log("");

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

for(const keys in user) {
    console.log(keys + ": " + user[keys]);
};
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

// 2

console.log("");
console.log(2);
console.log("");

const countProps = function (obj) {
    return Object.keys(obj).length;
  };

  console.log(countProps({}));
  
  console.log(countProps({ name: 'Mango', age: 2 }));
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
//  Функція повертає число - кількість властивостей.

// 3

console.log("");
console.log(3);
console.log("");


const findBestEmployee = function (employees) {
    let BestEmployee = 0;
    let BiggestNumber = 0;
    for (const key in employees) {
            if (BiggestNumber < employees[key]) {
            BestEmployee = key;
            BiggestNumber = employees[key];
        }
    };
    return BestEmployee;
};
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      david: 21,
      kiwi: 19,
      lux: 147,
      chelsy: 38,
    }),
  ); // lux

  
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я
// найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань
//  містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// 4
console.log("");
console.log(4);
console.log("");


const countTotalSalary = function (employees) {
    let sum = 0;
    for (const key in employees) {
        sum += employees[key];
    };
    return sum;
};

  console.log(countTotalSalary({}));
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); 
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); 

// Напиши функцію countTotalSalary(employees) приймаючу
//  об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта,
//   переданого в функцію, має вигляд "ім'я":"зарплата".

// 5 

console.log("");
console.log(5);
console.log("");

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function (arr, prop) {
    const err = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].hasOwnProperty(prop)) {
            continue;
        }
        err.push(arr[i][prop])
    }
    return err;
  };
  
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
  console.log(getAllPropValues(products, 'category')); // []

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.