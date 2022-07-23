"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanObject_1 = __importDefault(require("../object/cleanObject"));
const deepClone_1 = __importDefault(require("../object/deepClone"));
test(`Remove object keys containing empty values`, () => {
    const testObject = {
        a: 1,
        b: 2,
        c: null,
        d: undefined,
        e: `sdfsad`,
    };
    cleanObject_1.default(testObject);
    expect(testObject).toMatchObject({
        a: 1,
        b: 2,
        e: `sdfsad`,
    });
});
test(`Object cloning`, () => {
    const objectA = {
        test: `aha`,
        deep: {
            very: {
                nice: `:)`,
            },
        },
    };
    const objectB = deepClone_1.default(objectA);
    expect(objectA === objectB).toBeFalsy();
    expect(objectA).toMatchObject(objectB);
});
