const Intern = require("../lib/Intern");

test("Set school", () => {
    const testValue = "Michigan!";
    const e = new Intern("Foo", 1, "tino@tino.com", testValue);
    expect(e.school).toBe(testValue);
});

test(`getRole() returns "Intern"`, () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "tino@tino.com", "Michigan!");
    expect(e.getRole()).toBe(testValue);
});

test("Get school with getSchool()", () => {
    const testValue = "Michigan!";
    const e = new Intern("Foo", 1, "tino@tino.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});