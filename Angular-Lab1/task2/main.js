class Account {
    acc_no;
    balancae;
    constructor(acc_no = 0, balancae = 0) {
        this.acc_no = acc_no;
        this.balancae = balancae;
    }
    debitAmount() {
        return 0;
    }
    creditAmount() {
        return 0;
    }
    getBalance() {
        return 0;
    }
}
class CurrentAccount extends Account {
    interstRate;
    dateOfOpining;
    constructor(acc_no, balance, dateOfOpining, interstRate = 0) {
        super(acc_no, balance);
        this.interstRate = interstRate;
        this.dateOfOpining = dateOfOpining;
    }
    addCustomer() {
        return " Customer added to Current Account";
    }
    removeCustomer() {
        return " Customer removed in Current Account";
    }
}
class SavingAccount extends Account {
    MinBalance;
    dateOfOpining;
    constructor(acc_no, balance, dateOfOpining, MinBalance = 0) {
        super(acc_no, balance);
        this.MinBalance = MinBalance;
        this.dateOfOpining = dateOfOpining;
    }
    addCustomer() {
        return " Customer added to Saving Account";
    }
    removeCustomer() {
        return " Customer removed in Current Account";
    }
}
let savingAcc = new SavingAccount(1, 1000, 1, 2);
console.log(savingAcc.debitAmount());
console.log(savingAcc.addCustomer());
console.log(savingAcc.removeCustomer());
let currentAcc = new CurrentAccount(1, 1000, 1, 2);
console.log(currentAcc.debitAmount());
console.log(currentAcc.addCustomer());
console.log(currentAcc.removeCustomer());
