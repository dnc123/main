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
var round_1 = __importDefault(require("../number/round"));
var formatMoney_1 = __importDefault(require("../number/formatMoney"));
var convertMillsToNormalNumber_1 = __importDefault(require("../number/convertMillsToNormalNumber"));
var convertNormalNumberToMills_1 = __importDefault(require("../number/convertNormalNumberToMills"));
var randomNumberInRange_1 = __importDefault(require("../number/randomNumberInRange"));
test("Number rounding", function () {
    expect((0, round_1.default)(34.234554, 2))
        .toEqual(34.23);
    expect((0, round_1.default)(34.235554, 2))
        .toEqual(34.24);
});
test("Money formatting", function () {
    expect((0, formatMoney_1.default)(462.34, "LTL"))
        .toEqual("Lt\u00A0462.34");
    expect((0, formatMoney_1.default)(462.34))
        .toEqual("$462.34");
});
test("Converting mills to number", function () {
    expect((0, convertMillsToNormalNumber_1.default)(543262))
        .toEqual(543.262);
});
test("Converting number to mills", function () {
    expect((0, convertNormalNumberToMills_1.default)(543.262))
        .toEqual(543262);
});
test("Get random number in range", function () {
    var min = 53;
    var max = 58;
    var randomNumber = (0, randomNumberInRange_1.default)(min, max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
});
