"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const removeFromArrayByKey_1 = __importDefault(require("../array/removeFromArrayByKey"));
const groupByKey_1 = __importDefault(require("../array/groupByKey"));
const findMaxValue_1 = __importDefault(require("../array/findMaxValue"));
const filterRemoveObjectDuplicates_1 = __importDefault(require("../array/filterRemoveObjectDuplicates"));
const forEachAsync_1 = __importDefault(require("../array/forEachAsync"));
const shuffle_1 = __importDefault(require("../array/shuffle"));
const sortObjectArrayByStringKey_1 = __importDefault(require("../array/sortObjectArrayByStringKey"));
test(`Array shuffle`, () => {
    const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle_1.default(randomNumbers);
    expect(randomNumbers).not.toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const randomNumber = [1];
    shuffle_1.default(randomNumber);
    expect(randomNumber).toMatchObject([1]);
});
test(`forEachAsync`, () => __awaiter(void 0, void 0, void 0, function* () {
    let testString = ``;
    const longPromise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`long`);
        }, 100);
    });
    const shortPromise = Promise.resolve(`short`);
    yield forEachAsync_1.default([longPromise, shortPromise], (resolvedValue) => __awaiter(void 0, void 0, void 0, function* () {
        testString += yield resolvedValue;
    }));
    expect(testString).toEqual(`longshort`);
}));
test(`Remove array duplicates`, () => {
    const users = [
        { name: `Bob` },
        { name: `Cuker` },
        { name: `Bob` },
    ];
    expect(filterRemoveObjectDuplicates_1.default(users, `name`)).toMatchObject([
        { name: `Bob` },
        { name: `Cuker` },
    ]);
});
test(`Get max`, () => {
    expect(findMaxValue_1.default([1, 6, 7, 4])).toEqual(7);
});
test(`Remove from array by key`, () => {
    const nameKey = `name`;
    const joshName = `Josh`;
    const sallyName = `Sally`;
    const users = [
        { [nameKey]: `Bob` },
        { [nameKey]: joshName },
        { [nameKey]: sallyName },
    ];
    removeFromArrayByKey_1.default(users, nameKey, joshName);
    expect(users[1][nameKey]).toEqual(sallyName);
});
test(`Group array items`, () => {
    const users = [
        { age: 5 },
        { age: 16 },
        { age: 5 },
    ];
    expect(groupByKey_1.default(users, `age`)).toMatchObject({
        16: [
            { age: 16 },
        ],
        5: [
            { age: 5 },
            { age: 5 },
        ],
    });
});
test(`Array sort by object key`, () => {
    const users = [
        { name: `Bob` },
        { name: `Cuker` },
        { name: `Adam` },
    ];
    expect(sortObjectArrayByStringKey_1.default(users, `name`)).toMatchObject([
        { name: `Adam` },
        { name: `Bob` },
        { name: `Cuker` },
    ]);
});
