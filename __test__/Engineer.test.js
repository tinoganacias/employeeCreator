const Engineer = require("../lib/Engineer");

test("Create GitHub account", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer ("Foo", 1, "tino@tino.com", testValue);
    expect(e.GitHub).toBe(testValue);
});

test(`getRole() returns "Engineer"`, () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "tino@tino.com", "GitHubUsername");
    expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username with getGitHub()", () => {
    const testValue = "GitHubUsername";
    const e = new Engineer("Foo", 1, "tino@tino.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});