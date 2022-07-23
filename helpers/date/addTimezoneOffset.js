"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function default_1(targetDate) {
    return date_fns_1.subMinutes(targetDate, targetDate.getTimezoneOffset());
}
exports.default = default_1;
