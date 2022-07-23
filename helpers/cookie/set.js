"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ENV_1 = __importDefault(require("../../ENV"));
var js_cookie_1 = require("js-cookie");
var DAYS_IN_YEAR = 365;
function default_1(key, value, expiresInDays, isSharedAcrossSubdomains) {
    if (expiresInDays === void 0) { expiresInDays = DAYS_IN_YEAR; }
    if (isSharedAcrossSubdomains === void 0) { isSharedAcrossSubdomains = false; }
    var options = {
        expires: expiresInDays,
    };
    if (isSharedAcrossSubdomains) {
        options.domain = ENV_1.default.clientProxyDomain;
    }
    js_cookie_1.set(key, value, options);
}
exports.default = default_1;
