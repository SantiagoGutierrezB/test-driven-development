class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.history = [];
    }

    current() {
        return this.balance;
    }

    append(amount) {
        this.balance = parseFloat(amount) >= 0 ? this.balance + parseFloat(amount) : this.balance;
        // if the amount is negative don't push it to the history
        if(amount >= 0) {
            this.history.push({transaction: 'append', amount: amount, balance: this.balance}); 
        }
        return this.balance;
    }
    
    substract(amount) {
        this.balance = parseFloat(amount) >= 0 ? this.balance - parseFloat(amount) : this.balance;
        // if the amount is negative don't push it to the history
        if(amount >= 0) {
            this.history.push({transaction: 'substract', amount: amount, balance: this.balance}); 
        } 
        return this.balance;
    }
    
    getHistory() {
        return this.history;
    }

    merge(otherBankAccount) {
        for(let i = 0; i < otherBankAccount.history.length; i++) {
            this.history.push(otherBankAccount.history[i]);
        }

        this.balance = this.balance + otherBankAccount.balance;
        
    }

}

module.exports = BankAccount;