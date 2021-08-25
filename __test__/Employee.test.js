const Employee = require("../lib/Employee");

test("Create new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Give new employee name", () => {
    const name = "De'Coldest";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Set ID", () => {
    const testValue = 20;
    const e = new Employee("Foo", testValue);
    expect(e.ID).toBe(testValue);
});

test("Set Email", () => {
    const testValue = "tino@tino.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Get name with getName()", () => {
    const testValue = "De'Coldest";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Get ID with getID()", () => {
    const testValue = 20;
    const e = new Employee("Foo", testValue);
    expect(e.getID()).toBe(testValue);
});

test("Get email with getEmail()", () => {
    const testValue = "tino@tino.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test(`getRole() returns "Employee"`, () => {
    const testValue = "Employee";
    const e = new Employee("De'Coldest", 1, "tino@tino.com");
    expect(e.getRole()).toBe(testValue);
});