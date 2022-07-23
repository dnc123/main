"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatDate_1 = __importDefault(require("../date/formatDate"));
const addTimezoneOffset_1 = __importDefault(require("../date/addTimezoneOffset"));
const formatTime_1 = __importDefault(require("../date/formatTime"));
const removeTimezoneOffset_1 = __importDefault(require("../date/removeTimezoneOffset"));
const getLatestDate_1 = __importDefault(require("../date/getLatestDate"));
const getEarliestDate_1 = __importDefault(require("../date/getEarliestDate"));
const formatDateTime_1 = __importDefault(require("../date/formatDateTime"));
const isDateObject_1 = __importDefault(require("../date/isDateObject"));
const isDateString_1 = __importDefault(require("../date/isDateString"));
test(`Date time format`, () => {
    expect(formatDateTime_1.default(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`2011-11-23 14:30:22`);
});
test(`Date format`, () => {
    expect(formatDate_1.default(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`2011-11-23`);
});
test(`Time format`, () => {
    expect(formatTime_1.default(new Date(`2011-11-23 14:30:22`)))
        .toEqual(`14:30:22`);
});
test(`Is date object`, () => {
    expect(isDateObject_1.default(new Date(`2011-11-23 14:30:22`))).toBeTruthy();
});
test(`Is date object`, () => {
    expect(isDateString_1.default(`2011-11-23 14:30:22`)).toBeFalsy();
    expect(isDateString_1.default(`2011-11-23`)).toBeTruthy();
});
test(`Get latest date`, () => {
    const date1 = new Date(`2011-11-23 14:30:22`);
    const date2 = new Date(`2011-11-24 14:30:22`);
    const date3 = new Date(`2011-11-25 14:30:22`);
    expect(getLatestDate_1.default(date1)).toMatchObject(date1);
    expect(getLatestDate_1.default([date1, date3, date2]))
        .toMatchObject(date3);
});
test(`Get earliest date`, () => {
    const date1 = new Date(`2011-11-23 14:30:22`);
    const date2 = new Date(`2011-11-24 14:30:22`);
    const date3 = new Date(`2011-11-25 14:30:22`);
    expect(getEarliestDate_1.default(date1)).toMatchObject(date1);
    expect(getEarliestDate_1.default([date1, date3, date1, date2]))
        .toMatchObject(date1);
});
test(`Timezone manipulation`, () => {
    let date = new Date(`2011-11-23 14:30:22`);
    date = removeTimezoneOffset_1.default(date);
    date = addTimezoneOffset_1.default(date);
    expect(formatDateTime_1.default(date))
        .toEqual(`2011-11-23 14:30:22`);
});
