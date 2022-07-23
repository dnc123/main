"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(keyValQueryParams = {}) {
    return Object.keys(keyValQueryParams)
        .filter((key) => {
        return keyValQueryParams[key] !== null
            && typeof keyValQueryParams[key] !== `undefined`;
    })
        .map((key) => {
        return `${key}=${keyValQueryParams[key]}`;
    })
        .join(`&`);
}
exports.default = default_1;
