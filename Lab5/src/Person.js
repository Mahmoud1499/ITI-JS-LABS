class Person {
  constructor(fullName, money, SleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.SleepMood = SleepMood;
    this.healthRate = healthRate;
  }
}

Object.assign(Person.prototype, {
  sleep(hours) {
    if (hours == 7) {
      msg = "Happy";
    } else if (hours < 7) {
      msg = "Tired";
    } else if (hours > 7) {
      msg = "Lazy";
    }
    this.SleepMood = msg;
  },
  eat(meals) {
    if (meals == 3) {
      msg = 100;
    } else if (meals == 2) {
      msg = 75;
    } else if (meals == 1) {
      msg = 50;
    }
    this.healthRate = msg;
  },
  buy(items) {
    result = this.money - items * 10;
    this.money = result;
  },
});
