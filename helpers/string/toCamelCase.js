"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(value) {
    return value
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, '');
}
exports.default = default_1;
