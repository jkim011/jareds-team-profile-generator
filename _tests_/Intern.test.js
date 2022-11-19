const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("should create an object with intern's name, id, email, and school", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.name).toEqual(expect.any(String));
        expect(newIntern.id).toEqual(expect.any(Number));
        expect(newIntern.email).toEqual(expect.stringContaining("@"));
        expect(newIntern.school).toEqual(expect.any(String));
        // expect(newIntern.getRole()).toEqual("Intern");
    });
});

describe("getName", () => {
    it("should get intern name from user input and return it as a string", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.getName()).toEqual(expect.any(String));
    });
});

describe("getId", () => {
    it("should get intern id from user input and return it as a number", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.getId()).toEqual(expect.any(Number));
    });
});

describe("getEmail", () => {
    it("should get intern email from user input and return it as a string", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.getEmail()).toEqual(expect.stringContaining('@'));
    });
});

describe("getSchool", () => {
    it("should get intern school from user input and return it as a string", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.getEmail()).toEqual(expect.any(String));
    });
});

describe("getRole", () => {
    it("should give us 'Intern' as a string", () => {
        const newIntern = new Intern("person", 1, "person@gmail.com", "school");

        expect(newIntern.getRole()).toEqual("Intern");
    });
});
