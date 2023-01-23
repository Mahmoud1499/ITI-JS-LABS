let employees = [];

////////////
let add = () => {
  let obj = new Employee();

  //   obj.addfullName = prompt("Enter ur name");
  //   obj.money = prompt("Enter ur money");
  //   obj.email = obj.id = prompt("enter ur email");
  //   obj.salary=prompt("enter ur ");

  for (const key in obj) {
    obj[key] = prompt(`Enter  ${key}`);
  }
  employees.push(obj);
  // return obj;
};

let manager = () => {
  // alert("Hello mngr");
  let mgr = new Office("moddeer", employees);

  let action = prompt(
    "Enter 1 to get all emp \n 2 to get emp \n 3 to hire emp \n 4 to fire emp "
  );
  switch (parseInt(action)) {
    case 1:
      mgr.getAllEmp();
      employees.forEach((employee) => {
        for (const key in employee) {
          document.write(`<p>${key} : ${employee[key]}</p> `);
        }
      });
      break;
    case 2:
      let id = prompt("Enter ID ");
      mgr.getEmp(id);
      break;
    case 3:
      add();
      break;
    case 4:
      id = prompt("Enter ID ");
      mgr.getEmp(id);
      fire(id);
      break;
  }
};

////////////////
let quite = false;
do {
  input = prompt("Enter add or mngr or nrml and q for quite");

  switch (input) {
    case "add":
      add();
      break;
    case "mngr":
      manager();
      break;
    case "nrml":
      alert("hello emp");
      break;
  }
  quite = confirm("Do you want to exit ");
} while (!quite);

/////////////////////////
viewAll = (employees) => {
  employees.forEach((employee) => {
    for (const key in employee) {
      document.write(`<p>${key} : ${employee[key]}</p> `);
    }
    document.write(`====================`);
  });
};

////
// let mgr = new Office("moddeer", employees);
// console.log(mgr);

// employees.push(mahmoud);
