class Employee extends Person {
  //   #id;
  //   #email;
  //   #workMood;
  #salary;
  //   #isManager;

  constructor(
    id,
    fullName,
    email,
    money,
    salary,
    isManager,
    SleepMood,
    healthRate
  ) {
    super(fullName, money, SleepMood, healthRate);
    this.id = id;
    this.email = email;
    this.#salary = salary <= 1000 ? 1000 : salary;
    this.isManager = isManager;
  }

  //   get id() {
  //     return this.#id;
  //   }

  //   set id(value) {
  //     this.#id = value;
  //   }

  //   get email() {
  //     return this.#email;
  //   }

  //   set email(value) {
  //     this.#email = value;
  //   }

  //   get workMood() {
  //     return this.#workMood;
  //   }

  //   set workMood(value) {
  //     this.#workMood = value;
  //   }

  //   get salary() {
  //     return this.#salary;
  //   }

  //   set salary(value) {
  //     this.#salary = value <= 1000 ? 1000 : value;
  //   }

  //   get isManager() {
  //     return this.#isManager;
  //   }

  //   set isManager(value) {
  //     this.#isManager = value;
  //   }
}
//////////////////////////////////
Object.assign(Employee.prototype, Person, {
  work(hours) {
    if (hours == 8) {
      msg = "Happy";
    } else if (hours < 8) {
      msg = "Tired";
    } else if (hours > 8) {
      msg = "Lazy";
    }
    this.workMood = msg;
  },
});
////////////////////////////////
const mahmoud = new Employee(
  "Mahmoud Mohamed",
  9000,
  1,
  "MahmoudMohamed@",
  99,
  false
);

// console.log(mahmoud);
// mahmoud.sleep(6);
// mahmoud.eat(3);
// mahmoud.buy(300);
// mahmoud.work(6);
// console.log(mahmoud);
