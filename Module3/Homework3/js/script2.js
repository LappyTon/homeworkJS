// 6

console.log("");
console.log(6);
console.log("");

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function (allProdcuts, productName) {

};
  
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроїд')); // 2800

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту
// (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// 7

console.log("");
console.log(7);
console.log("");

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
      const createdTransaction = { currentAmount: amount, currentType: type };
      return createdTransaction;
    },

// console.log("Ваш баланс: " + this.balance + " долларів.");
// this.balance += Math.prompt("Доброго дня! Вас вітає уявний банк. Яку сумму долларів ви хочете ввести?");
//         this.transactions.push("deposit " + Math.prompt("Доброго дня! Вас вітає уявний банк. Яку сумму долларів ви хочете ввести?") + " dollars");
//         console.log("Ви успішно ввели " + Math.prompt("Доброго дня! Вас вітає уявний банк. Яку сумму долларів ви хочете ввести?") + "долларів!");

    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */


    deposit(amount) {
      this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
      this.balance += amount;
    },
  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Сумма менша за те, скільки ви хочете вивести!");
        return;
      }
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
      this.balance -= amount;
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },
  
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      return this.transactions[id];
    },
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      let allMoneyType = 0;
      for (const item of this.transactions) {
        if (item.type = DEPOSIT)
      }
    }
  };


account.deposit(4000)
account.deposit(100000)

// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
console.log(account.getBalance());

console.log(account.getTransactionDetails(1));

console.log(account.withdraw(10000));
console.log(account.withdraw(1000000000000000000000000000000000000000000000000000));
console.log(account.getBalance());
