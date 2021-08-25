const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, ID, email, GitHub) {
        super(name, ID, email);
        this.GitHub = GitHub;
    }

    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.GitHub;
    }
};

module.exports = Engineer;