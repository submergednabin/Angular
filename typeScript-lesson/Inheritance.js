var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empName, age) {
        this.empName = empName;
        this.age = age;
    }
    Employee.prototype.displayDetails = function () {
        console.log("name = " + this.empName);
        console.log("age = " + this.age);
    };
    return Employee;
}());
var PermanentEmployee = /** @class */ (function (_super) {
    __extends(PermanentEmployee, _super);
    function PermanentEmployee(salary, address) {
        var _this = _super.call(this, "Jack", 30) || this;
        _this.salary = salary;
        _this.address = address;
        return _this;
    }
    PermanentEmployee.prototype.showDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Salary is " + this.salary);
        console.log("Address is " + this.address);
    };
    return PermanentEmployee;
}(Employee));
var emp = new PermanentEmployee(20000, "1705 Leestown Rd");
emp.showDetails();
