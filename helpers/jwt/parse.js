"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atob_1 = __importDefault(require("atob"));
function default_1(token) {
    const base64URL = token.split(`.`)[1];
    const base64 = base64URL.replace(/-/g, `+`).replace(/_/g, `/`);
    const result = typeof atob === `undefined` ? atob_1.default(base64) : atob(base64);
    const JSONPayload = decodeURIComponent(result.split(``).map((c) => {
        return `%` + (`00` + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(``));
    return JSON.parse(JSONPayload);
}
exports.default = default_1;
