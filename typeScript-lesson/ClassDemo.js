var HelloWorld = /** @class */ (function () {
    function HelloWorld(empName, empId, designation) {
        this.empName = empName;
        this.empId = empId;
        this.designation = designation;
    }
    HelloWorld.prototype.displayEmpDetails = function () {
        console.log("Name is " + this.empName);
        console.log("Id is " + this.empId);
        console.log("Designation is " + this.designation);
    };
    return HelloWorld;
}());
var hello = new HelloWorld("John", 100, "Manager");
hello.displayEmpDetails();
