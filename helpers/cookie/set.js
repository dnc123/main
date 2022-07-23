"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ENV_1 = __importDefault(require("../../ENV"));
const js_cookie_1 = require("js-cookie");
const DAYS_IN_YEAR = 365;
function default_1(key, value, expiresInDays = DAYS_IN_YEAR, isSharedAcrossSubdomains = false) {
    const options = {
        expires: expiresInDays,
    };
    if (isSharedAcrossSubdomains) {
        options.domain = ENV_1.default.clientProxyDomain;
    }
    js_cookie_1.set(key, value, options);
}
exports.default = default_1;
