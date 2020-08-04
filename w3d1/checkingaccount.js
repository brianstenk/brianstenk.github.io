class CheckingAccount extends Account{

    constructor(number,  overdraftLimit = 0.0){
        super(number);
        this.overdraftLimit = overdraftLimit;
    }

    setOverDraftLimit(overdraftLimit){
        this.overdraftLimit = overdraftLimit
    }
     

    getOverDraftLimit(){
         return this.overdraftLimit
     }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount >= this._balance && amount >= overdraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

     toString(){
        return 'Account Number: ' + this._number +
        '\nAccount Type: Checking Account' +
        '\nBalance: ' + this._balance
     }
     endOfMonth() {
     return `Account ${this._number}: balance ${this._balance}`;
  }
  endOfMonth() {
    let response = '';
    if (this._balance < 0) {
      response = `Warning, low balance CheckingAccount ${this._number}:
      balance: ${this._balance} overdraft limit: ${this._overDraftLimit} \n`;
    } else {
      response = `CheckingAccount ${this._number}:
      balance: ${this._balance} overdraft limit: ${this._overDraftLimit} \n`;
    }
    return response;
  }

}

