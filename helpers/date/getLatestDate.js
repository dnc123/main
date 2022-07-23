"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function default_1(dates = []) {
    if (!Array.isArray(dates)) {
        dates = [dates];
    }
    let latestDate = dates[0];
    dates.forEach((date) => {
        if (date_fns_1.isAfter(date, latestDate)) {
            latestDate = date;
        }
    });
    return latestDate;
}
exports.default = default_1;
