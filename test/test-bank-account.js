const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        let balance = 450750.75;
        let bankAccount = new BankAccount(balance);

        it('Should get the actual balance from an account', () => {
            assert.equal(bankAccount.current(), balance);
        })
    });

    describe('#append', () => {
        let balance = 450750.75;
        let amount1 = -5049.25;
        let amount2 = 5049.25;
        let bankAccount = new BankAccount(balance);
        
        it('Should add the amount to an account in case its positive', () => {
            assert.equal(balance, bankAccount.append(amount1));
            assert.equal(balance + amount2, bankAccount.append(amount2));
        });
    });
    
    describe('#substract', () => {
        let balance = 450750.75;
        let amount1 = -5049.25;
        let amount2 = 5049.25;
        let bankAccount = new BankAccount(balance);
        
        it('Should substract the amount to an account in case its positive', () => {
            assert.equal(balance, bankAccount.substract(amount1));
            assert.equal(balance - amount2, bankAccount.substract(amount2));
        });
    });
    
    describe('#history', () => {
        let balance = 450750.75;
        let amount1 = 5049.25;
        let amount2 = 1000.00;
        let bankAccount = new BankAccount(balance);
        bankAccount.append(amount1);
        bankAccount.substract(amount2);
        
        it('Should get the history movements of the account', () => {
            assert.deepEqual(
                [{transaction: 'append', amount: amount1, balance: balance + amount1}, 
                {transaction: 'substract', amount: amount2, balance: balance + amount1 - amount2}],
                bankAccount.getHistory());
        });
    });
    
    describe('#merge', () => {
        it('Should merge bank accounts and show history of both', () => {
            let balance1 = 450750.75;
            let balance2 = 5750.50;

            let amount1 = 5049.25;
            let amount2 = 1000.00;
            
            let bankAccount1 = new BankAccount(balance1);
            let bankAccount2 = new BankAccount(balance2);
        
            bankAccount1.append(amount1);
            bankAccount2.append(amount2);
            
            bankAccount1.merge(bankAccount2);
            
            assert.deepEqual(
                [
                    {transaction: 'append', amount: amount1, balance: balance1 + amount1},
                    {transaction: 'append', amount: amount2, balance: balance2 + amount2},
                ],
                bankAccount1.getHistory());
        });

        it('Should add the amount of the second account to the original in case its positive', () => {
            let balance1 = 450750.75;
            let balance2 = 5750.50;

            let amount1 = 5049.25;
            let amount2 = 1000.00;
            
            let bankAccount1 = new BankAccount(balance1);
            let bankAccount2 = new BankAccount(balance2);
        
            bankAccount1.append(amount1);
            bankAccount2.append(amount2);
            
            bankAccount1.merge(bankAccount2);
            
            assert.equal(bankAccount1.current(), (balance1 + amount1) + (balance2 + amount2));
        });
        
        it('Should substract the amount of the second account to the original in case its negative', () => {
            let balance1 = 450750.75;
            let balance2 = 5750.50;

            let amount1 = 5049.25;
            let amount2 = 10000.00;
            
            let bankAccount1 = new BankAccount(balance1);
            let bankAccount2 = new BankAccount(balance2);
        
            bankAccount1.append(amount1);
            bankAccount2.substract(amount2);
            
            bankAccount1.merge(bankAccount2);
            
            assert.equal(bankAccount1.current(), (balance1 + amount1) + (balance2 - amount2));
        });
    });
    
    
});