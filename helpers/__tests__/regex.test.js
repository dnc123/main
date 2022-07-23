"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../regex/constants");
test("Email regex", function () {
    var testEmails = {
        valid: [
            "email@example.com",
            "firstname.lastname@example.com",
            "email@subdomain.example.com",
            "firstname+lastname@example.com",
            "email@123.123.123.123",
            "email@[123.123.123.123]",
            "\"email\"@example.com",
            "1234567890@example.com",
            "email@example-one.com",
            "_______@example.com",
            "email@example.name",
            "email@example.museum",
            "email@example.co.jp",
            "firstname-lastname@example.com",
            // `much.”more\ unusual”@example.com`,
            // `very.unusual.”@”.unusual.com@example.com`,
            // `very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com`,
        ],
        invalid: [
            "plainaddress",
            "#@%^%#$@#$@#.com",
            "@example.com",
            "Joe Smith <email@example.com>",
            "email.example.com",
            "email@example@example.com",
            ".email@example.com",
            "email.@example.com",
            "email..email@example.com",
            "\u3042\u3044\u3046\u3048\u304A@example.com",
            "email@example.com (Joe Smith)",
            "email@example",
            "email@-example.com",
            // `email@example.web`,
            // `email@111.222.333.44444`,
            "email@example..com",
            "Abc..123@example.com",
            "\u201D(),:;<>[]@example.com",
            "just\u201Dnot\u201Dright@example.com",
            "this is\"really\"notallowed@example.com",
        ],
    };
    testEmails.valid.forEach(function (testEmail) {
        expect(constants_1.emailRegex.test(testEmail)).toBeTruthy();
    });
    testEmails.invalid.forEach(function (testEmail) {
        expect(constants_1.emailRegex.test(testEmail)).toBeFalsy();
    });
});
test("Date regex", function () {
    expect(constants_1.dateRegex.test("1995-06-24")).toBeTruthy();
});
