var baseObj = {
  id : 101,
  display : function(){
     console.log(this.id,this.name,this.salary);
  }
}

function Employee(name,salary){
  this.name = name;
  this.salary = salary;
}

Employee.prototype = baseObj;

var e1 = new Employee("Magesh",10000)
e1.display()

var e2 =new Employee("Suresh",20000)
e2.display()
