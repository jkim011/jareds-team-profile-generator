const Employee = require('./lib/Employee.js');

describe("Employee", () => {
    it("should create an object with the employee name, id, and email", () => {
        const newEmployee = new Employee('person', '1', 'person@gmail.com');

        expect(newEmployee.name).toEqual(expect.any(String));
        expect(newEmployee.id).toEqual(expect.any(Number));
        expect(newEmployee.email).toEqual(expect.stringContaining('@'));
    });
});

describe("getName", () => {
    it("should get employee name from user input and return it as a string", () => {
        const newEmployee = new Employee('person', '1', 'person@gmail.com');

        expect(newEmployee.getName()).toEqual(expect.any(String));
    });
});

describe("getId", () => {
    it("should get employee id from user input and return it as a number", () => {
        const newEmployee = new Employee('person', '1', 'person@gmail.com');

        expect(newEmployee.getId()).toEqual(expect.any(Number));
    });
});

describe("getEmail", () => {
    it("should get employee email from user input and return it as a string", () => {
        const newEmployee = new Employee('person', '1', 'person@gmail.com');

        expect(newEmployee.getEmail()).toEqual(expect.stringContaining('@'));
    });
});

describe("getRole", () => {
    it("should give us 'Employee' as a string", () => {
        const newEmployee = new Employee('person', '1', 'person@gmail.com');

        expect(newEmployee.getRole()).toEqual("Employee");
    });
});
