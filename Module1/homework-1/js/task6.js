let input;
let total = 0;

do {
  let input = prompt("Введіть число")
  input = Number.parseInt(input);
  if (Number.isNaN(input)) {
      alert("В відповіді має бути хоч одна цифра! Спробуйте ще раз!")
  } else {
      total += input;
      
  };
  console.log(total)
} while (!Number.isNaN(input));