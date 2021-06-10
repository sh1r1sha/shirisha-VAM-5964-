
function customer(custId, custName, custAccount, ifsc){  
    this.custId = custId  
    this.custName = custName;
    this.custAccount = custAccount;
    this.ifsc = ifsc;
    
}
  
  var customer1 = new customer(101, 'chiru', 1238938483, 'SBI28384893'); 
  var customer2 = new customer(102, 'suresh', 216266543256, 'AOJ2144656');

  console.log(customer1.custId, customer1.custName)
  console.log(customer2.custId, customer2.custName)
