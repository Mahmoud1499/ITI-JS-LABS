interface AccountInterface {
    dateOfOpining;
    addCustomer();
    removeCustomer();
}

class Account {
    constructor(protected acc_no: number = 0, protected balancae: number = 0) {
    }
    public debitAmount(): number {
        return 0;
    }
    public creditAmount(): number {
        return 0;
    }
    public getBalance(): number {
        return 0;
    }
}

class CurrentAccount extends Account implements AccountInterface {
    dateOfOpining;
    constructor(acc_no: number, balance: number, dateOfOpining, private interstRate: number = 0) {
        super(acc_no, balance);
        this.dateOfOpining = dateOfOpining;
    }

    addCustomer() {
        return " Customer added to Current Account";
    }
    removeCustomer() {
        return " Customer removed in Current Account";

    }
}

class SavingAccount extends Account implements AccountInterface {
    dateOfOpining;
    constructor(acc_no: number, balance: number, dateOfOpining, public MinBalance: number = 0) {
        super(acc_no, balance);
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