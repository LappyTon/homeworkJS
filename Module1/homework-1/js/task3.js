let message = prompt("Напишіть пароль, щоб отримати доступ до панелеі керування.");
const ADMIN_PASSWORD = "ХОЧУ_СТО-грИвЕнь!!!12311" 
if (message === null) {
   console.log("Скасовано користувачем!");
} else if (message === ADMIN_PASSWORD) {
    console.log("Ласкаво просимо до панелі керування!");
} else if (message !== ADMIN_PASSWORD) {
    console.log("Доступ до панелі керування заборонений, томущо пароль невірний!");
}
alert(message);