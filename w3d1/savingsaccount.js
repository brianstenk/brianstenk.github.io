class SavingsAccount extends Account{

    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
     setInterest(interest){
         this._interest = interest;
     }

     getInterest(){
         return this._interest;
     }

     addInterest(interest){
        this._balance += (this._balance * this._interest) / 100;
    }

     toString(){
        return "SavingsAccount:" + this._number+ " interest: " + this._interest +"Account balance: "+this._balance;
     }
     endOfMonth(){
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest} \n`;
    }

}