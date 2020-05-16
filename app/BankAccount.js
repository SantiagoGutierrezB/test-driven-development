class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    current() {
        return this.balance
    }

    append(amount) {
        return parseFloat(amount) >= 0 ? this.balance + parseFloat(amount) : this.balance;
    }
}

module.exports = BankAccount;