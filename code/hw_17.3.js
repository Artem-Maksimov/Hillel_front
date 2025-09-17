class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.error("Сума для внесення повинна бути додатним числом.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else if (amount > this.balance) {
      console.error("Недостатньо коштів на рахунку.");
    } else {
      console.error("Сума для зняття повинна бути додатним числом.");
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());

account1.withdraw(2000);
account1.deposit(-100);