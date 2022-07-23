"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RANDOM_DATE = '2015-05-22';
const constants_1 = require("../regex/constants");
function default_1(checkingValue) {
    return checkingValue.length === RANDOM_DATE.length && constants_1.dateRegex.test(checkingValue);
}
exports.default = default_1;
