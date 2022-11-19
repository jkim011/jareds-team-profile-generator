const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should create an object with intern's name, id, email, and office number", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.name).toEqual(expect.any(String));
        expect(newManager.id).toEqual(expect.any(Number));
        expect(newManager.email).toEqual(expect.stringContaining("@"));
        expect(newManager.officeNumber).toEqual(expect.any(Number));
        // expect(newManager.getRole()).toEqual("Manager");
    });   
});

describe("getName", () => {
    it("should get manager name from user input and return it as a string", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.getName()).toEqual(expect.any(String));
    });
});

describe("getId", () => {
    it("should get manager id from user input and return it as a number", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.getId()).toEqual(expect.any(Number));
    });
});

describe("getEmail", () => {
    it("should get manager email from user input and return it as a string", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.getEmail()).toEqual(expect.stringContaining('@'));
    });
});

describe("getOfficeNumber", () => {
    it("should get manager office number from user input and return it as a string", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.getOfficeNumber()).toEqual(expect.any(Number));
    });
});

describe("getRole", () => {
    it("should give us 'Manager' as a string", () => {
        const newManager = new Manager("person", 1, "person@gmail.com", 10)

        expect(newManager.getRole()).toEqual("Manager");
    });
});
