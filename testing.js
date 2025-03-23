const bcrypt = require("bcrypt");

function hashPassword(password) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            return hash;
        });
    })
};

// describe("name of the test", function() {
//     it("should hash a password correctly", function() {
//         const password = "password";
//         const hashedPassword = hashPassword(password);
//         expect(hashedPassword).not.toBe(password);
//     });
// });

module.exports = hashPassword;
