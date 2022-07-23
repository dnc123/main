"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
function default_1(value, salt) {
    return crypto_1.createHmac("sha256", salt)
        .update(value)
        .digest("hex");
}
exports.default = default_1;
