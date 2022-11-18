const Engineer = require('./lib/Engineer.js');

describe("Engineer", () => {
    it("should create an object with engineer's name, id, email, and github", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.name()).toEqual(expect.any(String))
        expect(newEngineer.id()).toEqual(expect.any(Number))
        expect(newEngineer.email()).toEqual(expect.stringContaining("@"))
        expect(newEngineer.github()).toEqual(expect.any(String))
        expect(newEngineer.getRole()).toEqual("Engineer");
    })
})

describe("getName", () => {
    it("should get engineer name from user input and return it as a string", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.getName()).toEqual(expect.any(String));
    });
});

describe("getId", () => {
    it("should get engineer id from user input and return it as a number", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.getId()).toEqual(expect.any(Number));
    });
});

describe("getEmail", () => {
    it("should get engineer email from user input and return it as a string", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.getEmail()).toEqual(expect.stringContaining('@'));
    });
});

describe("getGithub", () => {
    it("should get engineer github from user input and return it as a string", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.getGithub()).toEqual(expect.any(String));
    });
});

describe("getRole", () => {
    it("should give us 'Engineer' as a string", () => {
        const newEngineer = new Engineer("person", 1, "person@gmail.com", "persongithub");

        expect(newEngineer.getRole()).toEqual("Engineer");
    });
});
