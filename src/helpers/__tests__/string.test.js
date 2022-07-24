"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slugify_1 = __importDefault(require("../string/slugify"));
var unslugify_1 = __importDefault(require("../string/unslugify"));
var sanitize_1 = __importDefault(require("../string/sanitize"));
var generateUnique_1 = __importDefault(require("../string/generateUnique"));
var buildQueryParams_1 = __importDefault(require("../string/buildQueryParams"));
var capitalizeFirstLetter_1 = __importDefault(require("../string/capitalizeFirstLetter"));
var capitalizeFirstLetterOfAllWordsInString_1 = __importDefault(require("../string/capitalizeFirstLetterOfAllWordsInString"));
var hash_1 = __importDefault(require("../string/hash"));
var isJSON_1 = __importDefault(require("../string/isJSON"));
var bytesToReadable_1 = __importDefault(require("../string/bytesToReadable"));
var makeNumberNthAffix_1 = __importDefault(require("../string/makeNumberNthAffix"));
var truncate_1 = __importDefault(require("../string/truncate"));
var hashtagify_1 = __importDefault(require("../string/hashtagify"));
test("Slugify", function () {
    expect((0, slugify_1.default)("fasdf fsadfas@#SDAFAfrg12"))
        .toEqual("fasdf-fsadfassdafafrg12");
});
test("Unslugify", function () {
    expect((0, unslugify_1.default)("hello-darkness-MY-old-Friend"))
        .toEqual("hello darkness MY old Friend");
});
test("Hashtagify", function () {
    expect((0, hashtagify_1.default)("ervtrh rtherth e ththd th"))
        .toEqual("#ErvtrhRtherthEThthdTh");
});
test("HTML sanitization", function () {
    expect((0, sanitize_1.default)("</div></body></html>"))
        .toEqual("&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;");
});
test("Unique string generation", function () {
    var randomUniqueString1 = (0, generateUnique_1.default)();
    var randomUniqueString2 = (0, generateUnique_1.default)();
    expect(randomUniqueString1).not.toMatch(randomUniqueString2);
    expect(randomUniqueString1.length).toEqual(25);
    expect(randomUniqueString2.length).toEqual(25);
    expect((0, generateUnique_1.default)(1).length).toEqual(14);
});
test("Query params building", function () {
    expect((0, buildQueryParams_1.default)({
        a: 1,
        b: 2,
        name: "Stan",
        isNice: true,
    })).toEqual("a=1&b=2&name=Stan&isNice=true");
});
test("Character capitalization", function () {
    expect((0, capitalizeFirstLetter_1.default)("asdf sdfg dfgh"))
        .toEqual("Asdf sdfg dfgh");
});
test("Character capitalization in all words", function () {
    expect((0, capitalizeFirstLetterOfAllWordsInString_1.default)("asdf sdfg dfgh"))
        .toEqual("Asdf Sdfg Dfgh");
});
test("Hash", function () {
    expect((0, hash_1.default)("asdf sdfg dfgh", "salting"))
        .toEqual("12d8d2c2c15f693e99e7ff3c3e41196f86f1350e6205dd0bc31f14c9d35070ef");
});
test("Is JSON", function () {
    var _a;
    expect((0, isJSON_1.default)("gdsgsfd")).toBeFalsy();
    expect((0, isJSON_1.default)(JSON.stringify((_a = {
            hi: "mmmadgd"
        },
        _a["fdgsfd-sdfgsf"] = "sss",
        _a[3] = true,
        _a)))).toBeTruthy();
});
test("Bytes to readable", function () {
    expect((0, bytesToReadable_1.default)(210))
        .toEqual("210 B");
    expect((0, bytesToReadable_1.default)(45235))
        .toEqual("44.17 KB");
    expect((0, bytesToReadable_1.default)(75464354))
        .toEqual("71.97 MB");
    expect((0, bytesToReadable_1.default)(23464745674))
        .toEqual("21.85 GB");
    expect((0, bytesToReadable_1.default)(23464745674354))
        .toEqual("21.34 TB");
});
test("Get nth number", function () {
    expect((0, makeNumberNthAffix_1.default)(1))
        .toEqual("st");
    expect((0, makeNumberNthAffix_1.default)(2))
        .toEqual("nd");
    expect((0, makeNumberNthAffix_1.default)(3))
        .toEqual("rd");
    expect((0, makeNumberNthAffix_1.default)(4))
        .toEqual("th");
    expect((0, makeNumberNthAffix_1.default)(7))
        .toEqual("th");
    expect((0, makeNumberNthAffix_1.default)(22))
        .toEqual("nd");
});
test("Truncate string to ...", function () {
    expect((0, truncate_1.default)("Really not that long string", 15))
        .toEqual("Really not that...");
});
