"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(request) {
    return new Promise((resolve, reject) => {
        request.onsuccess = () => {
            return resolve(request.result);
        };
        request.onerror = () => {
            return reject(request.error);
        };
    });
}
exports.default = default_1;
