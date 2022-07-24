"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cleanObject_1 = __importDefault(require("../object/cleanObject"));
var deepClone_1 = __importDefault(require("../object/deepClone"));
test("Remove object keys containing empty values", function () {
    var testObject = {
        a: 1,
        b: 2,
        c: null,
        d: undefined,
        e: "sdfsad",
    };
    (0, cleanObject_1.default)(testObject);
    expect(testObject).toMatchObject({
        a: 1,
        b: 2,
        e: "sdfsad",
    });
});
test("Object cloning", function () {
    var objectA = {
        test: "aha",
        deep: {
            very: {
                nice: ":)",
            },
        },
    };
    var objectB = (0, deepClone_1.default)(objectA);
    expect(objectA === objectB).toBeFalsy();
    expect(objectA).toMatchObject(objectB);
});
