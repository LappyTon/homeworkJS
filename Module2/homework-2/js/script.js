// 1

const logItems = function(array) {
    for (const arr of array) {
        console.log(Number(array.indexOf(arr)) + 1 + " - " + arr);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 2
 
const calculateEngravingPrice = function (mesage, pricePerWord) {
    mesage = mesage.split(" ");
    let sum = 0;
    for (const word of mesage) {
        sum += pricePerWord;
    }
    return sum;
  };

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus', 10),
  );
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20
    ),
  ); 
  
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); 

// 3
const findLongestWord = function (string) {
    string = string.split(" ")
    let maxLength = '';
    for (const word of string) {
        if (maxLength.length < word.length) {
            maxLength = word;
        }
    }
    return maxLength;
};
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  
console.log(findLongestWord('Google do a roll')); 
  
console.log(findLongestWord('May the force be with you')); 

// 4

const formatString = function (string) {
    if (string.length > 40) {
        const array = string.split("");
        array.splice(40)
        string = array.join("");
        return string + "...";
    };
    return string;
  };
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); 
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// 5

const checkForSpam = function (message) {
    let result = false;
    message = message.split(" ");
    for (const word of message){
        if (word === "[SPAM]" || word === "sale"){
        result = true;
        };
    };
    return result;
};
  
  console.log(checkForSpam('Latest technology news')); 
  
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  
  console.log(checkForSpam('Get best sale offers now!'));
  
  console.log(checkForSpam('[SPAM] How to earn fast money?'));

// 6
let numbers = [];
let total;
do {
  numbers += Number.parseFloat(prompt("Введіть число"));
  total += Number.parseFloat(prompt("Введіть число"));
  console.log(numbers);
  console.log(total);
} while (!isNaN(total));

// 7

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  };
};

const isLoginUnique = function(allLogins, login) {
  const checkLogin = allLogins.includes(login);
  if (checkLogin) {
    return false;
  } else {
    return true;
  };
};

 const addLogin = function(allLogins, login) {
   if (!isLoginValid(login)) {
     console.log("Помилка! Логін повинен бути від 4 до 16 символів");
     return;
   }
   if (!isLoginUnique(allLogins, login)) {
       console.log("Такий логін уже використовується!");
       return;
  };
  allLogins.push(login);
  console.log("Логін успішно доданий!");
  return allLogins;
};

console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast'));