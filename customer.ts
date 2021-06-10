class Bank{
    custId:number;
    custName:string;
    custAcc: number;
    constructor(custId:number, custName:string, custAcc:number){
        this.custId = custId;
        this.custName = custName;
        this.custAcc = custAcc;
    }
    getSavingDeposit(){
        return `CUSTOMER SAVINGS DEPOSITED {5%} ${this.custId}`
    }
    getReccuringDeposit(){
        return `Reccuring Deposit= {7%}`
    }
    getFixedDeposit(){
        return `fixed deposit is 5000`
    }
}
let cus1 = new Bank(1, 'shiva', 252884778838) 
let cus2 = new Bank(2,'Shirisha', 232918487548) 

console.log(cus1.custId, cus1.custName, cus1.custAcc)
console.log(cus2.custId, cus2.custName, cus2.custAcc)
console.log(cus1.getSavingDeposit())
console.log(cus1.getReccuringDeposit())
console.log(cus1.getFixedDeposit())
console.log(cus2.getSavingDeposit())
console.log(cus2.getReccuringDeposit())
console.log(cus2.getFixedDeposit())
