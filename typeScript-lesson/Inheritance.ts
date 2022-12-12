class Employee {
  public empName: string;

  public age: number;
  constructor(empName: string, age: number) {
    this.empName = empName;
    this.age = age;
  }
  displayDetails(): void {
    console.log("name = " + this.empName )
    console.log("age = " + this.age )
  }
}
class PermanentEmployee extends Employee{
    public salary:number;
    public address:string;
    constructor(salary:number, address:string){
        super("Jack",30);
        this.salary=salary;
        this.address=address;
    }
    showDetails(){
        super.displayDetails();
        console.log("Salary is " + this.salary)
        console.log("Address is " + this.address)
    }
}

var emp:PermanentEmployee = new PermanentEmployee(20000, "1705 Leestown Rd");
emp.showDetails();