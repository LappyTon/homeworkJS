let countryName = prompt("Введіть назву своєї країни.");
let countryPrice

countryName = countryName.toLowerCase();

switch (countryName) {
    case "китай":
        countryPrice = 100;
    break;

    case "чилі":
        countryPrice = 250;
        break;
    
    case "австралія":
        countryPrice = 170;
        break;

    case "індія":
        countryPrice = 80;
        break;
    
    case "ямайка":
        countryPrice = 120;
        break;

    default:
        alert("Або ваша країна не обслуговується, або ви неправильно ввели назву країни!!!");
};

alert(`Доставка в ${countryName} буде коштувати ${countryPrice} кредитів.`);