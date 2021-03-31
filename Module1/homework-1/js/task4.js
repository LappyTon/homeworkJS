const credits = 23580;
const pricePerDroid = 3000;

let webPrompt = prompt("Яку кількість дронів ви хочете купити?");
webPrompt = Number(webPrompt);
webPrompt;
console.log(webPrompt);
const pricePerDroidMultipliedByWebPrompt = pricePerDroid * webPrompt;
if ((webPrompt = null)) {
  console.log("Скасовано користувачем!");
} else if (credits < pricePerDroidMultipliedByWebPrompt) {
  console.log("Недостатньо коштів на рахунку, щоб купити стільки дронів");
} else if (
  credits < pricePerDroid * webPrompt ||
  pricePerDroidMultipliedByWebPrompt > 1000000
) {
  console.log("Недостатньо коштів на рахунку, щоб купити стііільки дронів");
} else if (credits > pricePerDroidMultipliedByWebPrompt) {
}
