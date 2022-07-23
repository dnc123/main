"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = require("cookie");
function default_1(cookiesString) {
    return typeof cookiesString === "string"
        ? cookie_1.parse(cookiesString)
        : {};
}
exports.default = default_1;
