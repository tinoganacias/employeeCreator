const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Set office number", () => {
    const testValue = 20;
    const e = new Manager("Foo", 1, "tino@tino.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test(`getRole() return "Manager"`, () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "tino@tino.com", 20);
    expect(e.getRole()).toBe(testValue);
});

test("get office number with getOffice()", () => {
    const testValue = 20;
    const e = new Manager("Foo", 1, "tino@tino.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});