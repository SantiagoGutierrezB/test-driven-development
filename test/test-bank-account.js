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
        let amount1 = 5049.25;
        let amount2 = -5049.25;
        let bankAccount = new BankAccount(balance);
        
        it('Should add the amount to an account in case its positive', () => {
            assert.equal(455800, bankAccount.append(amount1));
            assert.equal(balance, bankAccount.append(amount2));
        });
    });
});