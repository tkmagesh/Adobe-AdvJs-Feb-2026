function Employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
  
  this.print = function () {
    console.log(this.id, this.name, this.salary);
  };
}

/* 
In the above implementation, a new instance of 'print' function will be created for each employee object instance.

We know that the 'prototype' object of the 'Employee' is the 'base object' for all the employee object instances

Assigning the 'print' method to the 'prototype' will make the method accessible to all the employee object instances avoiding the creation of a new function for every employee object instance
*/

function Employee(id, name, salary) {
  this.id = id;
  this.name = name;
  this.salary = salary;
}
Employee.prototype.print = function () {
  console.log(this.id, this.name, this.salary);
};

/* the 'class' keyword simplifies the above */
class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    print(){
        console.log(this.id, this.name, this.salary)
    }
}

// investigation
console.log(typeof Employee) // => function

console.dir(Employee)
// Notice that the 'print' method is created as a part of the 'Employee.prototype' (base object)