const hashPassword = require("../testing");

describe("name of the test", function() {
    it("should hash a password correctly", function() {
        const password = "password";
        const hashedPassword = hashPassword(password);
        expect(hashedPassword).not.toBe(password);
    });
});
