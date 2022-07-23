"use strict";
// import {
// 	round,
// 	formatMoney,
// 	convertMillsToNormalNumber,
// 	convertNormalNumberToMills,
// 	randomNumberInRange,
// } from '../number';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const round_1 = __importDefault(require("../number/round"));
const formatMoney_1 = __importDefault(require("../number/formatMoney"));
const convertMillsToNormalNumber_1 = __importDefault(require("../number/convertMillsToNormalNumber"));
const convertNormalNumberToMills_1 = __importDefault(require("../number/convertNormalNumberToMills"));
const randomNumberInRange_1 = __importDefault(require("../number/randomNumberInRange"));
test(`Number rounding`, () => {
    expect(round_1.default(34.234554, 2))
        .toEqual(34.23);
    expect(round_1.default(34.235554, 2))
        .toEqual(34.24);
});
test(`Money formatting`, () => {
    expect(formatMoney_1.default(462.34, `LTL`))
        .toEqual(`Lt 462.34`);
    expect(formatMoney_1.default(462.34))
        .toEqual(`$462.34`);
});
test(`Converting mills to number`, () => {
    expect(convertMillsToNormalNumber_1.default(543262))
        .toEqual(543.262);
});
test(`Converting number to mills`, () => {
    expect(convertNormalNumberToMills_1.default(543.262))
        .toEqual(543262);
});
test(`Get random number in range`, () => {
    const min = 53;
    const max = 58;
    const randomNumber = randomNumberInRange_1.default(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});
