"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = __importDefault(require("../string/slugify"));
const unslugify_1 = __importDefault(require("../string/unslugify"));
const sanitize_1 = __importDefault(require("../string/sanitize"));
const generateUnique_1 = __importDefault(require("../string/generateUnique"));
const buildQueryParams_1 = __importDefault(require("../string/buildQueryParams"));
const capitalizeFirstLetter_1 = __importDefault(require("../string/capitalizeFirstLetter"));
const capitalizeFirstLetterOfAllWordsInString_1 = __importDefault(require("../string/capitalizeFirstLetterOfAllWordsInString"));
const hash_1 = __importDefault(require("../string/hash"));
const isJSON_1 = __importDefault(require("../string/isJSON"));
const bytesToReadable_1 = __importDefault(require("../string/bytesToReadable"));
const makeNumberNthAffix_1 = __importDefault(require("../string/makeNumberNthAffix"));
const truncate_1 = __importDefault(require("../string/truncate"));
const hashtagify_1 = __importDefault(require("../string/hashtagify"));
test(`Slugify`, () => {
    expect(slugify_1.default(`fasdf fsadfas@#SDAFAfrg12`))
        .toEqual(`fasdf-fsadfassdafafrg12`);
});
test(`Unslugify`, () => {
    expect(unslugify_1.default(`hello-darkness-MY-old-Friend`))
        .toEqual(`hello darkness MY old Friend`);
});
test(`Hashtagify`, () => {
    expect(hashtagify_1.default(`ervtrh rtherth e ththd th`))
        .toEqual(`#ErvtrhRtherthEThthdTh`);
});
test(`HTML sanitization`, () => {
    expect(sanitize_1.default(`</div></body></html>`))
        .toEqual(`&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;`);
});
test(`Unique string generation`, () => {
    const randomUniqueString1 = generateUnique_1.default();
    const randomUniqueString2 = generateUnique_1.default();
    expect(randomUniqueString1).not.toMatch(randomUniqueString2);
    expect(randomUniqueString1.length).toEqual(25);
    expect(randomUniqueString2.length).toEqual(25);
    expect(generateUnique_1.default(1).length).toEqual(14);
});
test(`Query params building`, () => {
    expect(buildQueryParams_1.default({
        a: 1,
        b: 2,
        name: `Stan`,
        isNice: true,
    })).toEqual(`a=1&b=2&name=Stan&isNice=true`);
});
test(`Character capitalization`, () => {
    expect(capitalizeFirstLetter_1.default(`asdf sdfg dfgh`))
        .toEqual(`Asdf sdfg dfgh`);
});
test(`Character capitalization in all words`, () => {
    expect(capitalizeFirstLetterOfAllWordsInString_1.default(`asdf sdfg dfgh`))
        .toEqual(`Asdf Sdfg Dfgh`);
});
test(`Hash`, () => {
    expect(hash_1.default(`asdf sdfg dfgh`, `salting`))
        .toEqual(`12d8d2c2c15f693e99e7ff3c3e41196f86f1350e6205dd0bc31f14c9d35070ef`);
});
test(`Is JSON`, () => {
    expect(isJSON_1.default(`gdsgsfd`)).toBeFalsy();
    expect(isJSON_1.default(JSON.stringify({
        hi: `mmmadgd`,
        [`fdgsfd-sdfgsf`]: `sss`,
        3: true,
    }))).toBeTruthy();
});
test(`Bytes to readable`, () => {
    expect(bytesToReadable_1.default(210))
        .toEqual(`210 B`);
    expect(bytesToReadable_1.default(45235))
        .toEqual(`44.17 KB`);
    expect(bytesToReadable_1.default(75464354))
        .toEqual(`71.97 MB`);
    expect(bytesToReadable_1.default(23464745674))
        .toEqual(`21.85 GB`);
    expect(bytesToReadable_1.default(23464745674354))
        .toEqual(`21.34 TB`);
});
test(`Get nth number`, () => {
    expect(makeNumberNthAffix_1.default(1))
        .toEqual(`st`);
    expect(makeNumberNthAffix_1.default(2))
        .toEqual(`nd`);
    expect(makeNumberNthAffix_1.default(3))
        .toEqual(`rd`);
    expect(makeNumberNthAffix_1.default(4))
        .toEqual(`th`);
    expect(makeNumberNthAffix_1.default(7))
        .toEqual(`th`);
    expect(makeNumberNthAffix_1.default(22))
        .toEqual(`nd`);
});
test(`Truncate string to ...`, () => {
    expect(truncate_1.default(`Really not that long string`, 15))
        .toEqual(`Really not that...`);
});
