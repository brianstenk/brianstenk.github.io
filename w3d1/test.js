"use strict"
describe('This part tests the functions in the Account Class', () => {
    it('Test getNumber Method', () => {
      const account = new Account(10001);
      assert.equal(account.getNumber(), 10001);
    });
    it('Test getBalance Method', () => {
      const account = new Account(10001);
      assert.equal(account.getBalance(), 0.0);
    });
    it('Test the deposit Method', () => {
      const account = new Account(10001);
      account.deposit(1000);
      assert.equal(account.getBalance(), 1000.0);
    });
    it('Test the withdraw Method', () => {
      const account = new Account(10001);
      account.deposit(300);
      account.withdraw(200);
      assert.equal(account.getBalance(), 100.0);
    });
  });
  
  /* this part tests the savings account class */
  describe('Testing the functions in the SavingsAccount Class', () => {
    it('Test getInterest method', () => {
      const account = new SavingsAccount(10002, 2.5);
      assert.equal(account.getInterest(), 2.5);
    });
    it('Test setInterest method', () => {
      const account = new SavingsAccount(10002, 2.5);
      account.setInterest(3.5);
      assert.equal(account.getInterest(), 3.5);
    });
    it('Test addInterest method', () => {
      const account = new SavingsAccount(10002, 2.5);
      account.deposit(100);
      account.addInterest();
      assert.equal(account.getBalance(), 102.5);
    });
    it('Test end Of month', () => {
      const account = new SavingsAccount(10002, 2.5);
      account.deposit(100);
      assert.equal(
        account.endOfMonth(),
        'Interest added SavingsAccount 10002: balance: 102.5 interest: 2.5 \n'
      );
    });
  });
  
  /* this part tests the checkings account class */
  describe('Testings the functions in the CheckingsAccount Class', () => {
    it('Test getOverDraftLimit method', () => {
      const account = new CheckingAccount(10003, -500);
      assert.equal(account.getOverDraftLimit(), -500);
    });
    it('Test setOverDraftLimit method', () => {
      const account = new CheckingAccount(10003, -500);
      account.setOverDraftLimit(-300);
      assert.equal(account.getOverDraftLimit(), -300);
    });
  });
  
