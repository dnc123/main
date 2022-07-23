"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const date_fns_1 = require("date-fns");
function default_1(ID, secretJWTKey) {
    return jsonwebtoken_1.default.sign({
        ID,
        exp: date_fns_1.addDays(new Date(), 365).getTime(),
    }, secretJWTKey);
}
exports.default = default_1;
