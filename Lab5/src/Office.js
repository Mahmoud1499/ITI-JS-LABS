class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  }
  ///////////////////////////////
}

Object.assign(Office.prototype, {
  getAllEmp() {
    return this.employees;
  },
  getEmp(id) {
    var employees = 0;
    employees.forEach((element) => {
      if (element.ID == id) {
        employees = element;
      }
    });
    return employees;
  },
  fire(id) {
    for (let i = 0; i < empobj.length; i++) {
      if (empobj[i].Id == id) {
        empobj.splice(i, 1);
      }
    }
  },
  hire(Employee) {
    empobj.push(Employee);
  },
});
