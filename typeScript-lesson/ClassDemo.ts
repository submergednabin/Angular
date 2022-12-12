class HelloWorld {
  public empName: string;
  public empId: number;
  public designation: string;

  constructor(empName: string, empId: number, designation: string) {
    this.empName = empName;
    this.empId = empId;
    this.designation = designation;
  }

  displayEmpDetails(){
    console.log("Name is " + this.empName);
    console.log("Id is " + this.empId);
    console.log("Designation is " + this.designation);
  }
  
}
var hello:HelloWorld = new HelloWorld("John",100, "Manager")
hello.displayEmpDetails();