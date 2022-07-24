"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var formatDate_1 = __importDefault(require("../date/formatDate"));
var addTimezoneOffset_1 = __importDefault(require("../date/addTimezoneOffset"));
var formatTime_1 = __importDefault(require("../date/formatTime"));
var removeTimezoneOffset_1 = __importDefault(require("../date/removeTimezoneOffset"));
var getLatestDate_1 = __importDefault(require("../date/getLatestDate"));
var getEarliestDate_1 = __importDefault(require("../date/getEarliestDate"));
var formatDateTime_1 = __importDefault(require("../date/formatDateTime"));
var isDateObject_1 = __importDefault(require("../date/isDateObject"));
var isDateString_1 = __importDefault(require("../date/isDateString"));
test("Date time format", function () {
    expect((0, formatDateTime_1.default)(new Date("2011-11-23 14:30:22")))
        .toEqual("2011-11-23 14:30:22");
});
test("Date format", function () {
    expect((0, formatDate_1.default)(new Date("2011-11-23 14:30:22")))
        .toEqual("2011-11-23");
});
test("Time format", function () {
    expect((0, formatTime_1.default)(new Date("2011-11-23 14:30:22")))
        .toEqual("14:30:22");
});
test("Is date object", function () {
    expect((0, isDateObject_1.default)(new Date("2011-11-23 14:30:22"))).toBeTruthy();
});
test("Is date object", function () {
    expect((0, isDateString_1.default)("2011-11-23 14:30:22")).toBeFalsy();
    expect((0, isDateString_1.default)("2011-11-23")).toBeTruthy();
});
test("Get latest date", function () {
    var date1 = new Date("2011-11-23 14:30:22");
    var date2 = new Date("2011-11-24 14:30:22");
    var date3 = new Date("2011-11-25 14:30:22");
    expect((0, getLatestDate_1.default)(date1)).toMatchObject(date1);
    expect((0, getLatestDate_1.default)([date1, date3, date2]))
        .toMatchObject(date3);
});
test("Get earliest date", function () {
    var date1 = new Date("2011-11-23 14:30:22");
    var date2 = new Date("2011-11-24 14:30:22");
    var date3 = new Date("2011-11-25 14:30:22");
    expect((0, getEarliestDate_1.default)(date1)).toMatchObject(date1);
    expect((0, getEarliestDate_1.default)([date1, date3, date1, date2]))
        .toMatchObject(date1);
});
test("Timezone manipulation", function () {
    var date = new Date("2011-11-23 14:30:22");
    date = (0, removeTimezoneOffset_1.default)(date);
    date = (0, addTimezoneOffset_1.default)(date);
    expect((0, formatDateTime_1.default)(date))
        .toEqual("2011-11-23 14:30:22");
});
