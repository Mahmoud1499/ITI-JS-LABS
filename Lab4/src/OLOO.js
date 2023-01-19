const Person = {

    init(fullName, money, SleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.SleepMood = SleepMood;
        this.healthRate = healthRate;
     
      },
      sleep :function (hours) { 
            if(hours==7){
                msg="Happy";
            }else if(hours<7 ){
                msg="Tired";
            }else if(hours>7){
                msg="Lazy"
           }
           this.SleepMood= msg;
        },
        eat:function (meals) { 
            if(meals==3){
                msg=100;
            }else if(meals==2){
                msg=75;
            }else if(meals==1){
                msg=50;
            }
            this.healthRate=msg
         },
        buy (items) { 
            result = this.money - items*10;
            this.money= result;
           }
    }

    
    const mahmoud = Object.create(Person)
    mahmoud.init('Mahmoud Mohamed', 20000);
    
    
    console.log(mahmoud);
    mahmoud.sleep(8);
    mahmoud.eat(3);
    mahmoud.buy(300);
    console.log(mahmoud);
    