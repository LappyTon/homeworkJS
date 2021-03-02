// 1

let counter = 1;

while (counter < 10) {
  console.log('Counter: ', counter);
  counter += 1;
};

// 2

let counter1 = 1;
while (counter1 < 10) {
    console.log(counter1)
    if (counter1 === 1 || counter1 === 3 || counter1 === 5 || counter1 === 7 || counter1 === 9) {
        console.log("Число непарне");
    } else { 
        console.log("Число парне");
    };
    counter1 += 1;
};

// 3 

let num = 20;

console.log(num);

while (num < 28) {
    num += 1;
    console.log(num);
}

// 4

let username = "";
do {
  username = prompt('Введіть нікнейм довший за 6 символів');
  console.log(username);
}
while (username.length > 6);