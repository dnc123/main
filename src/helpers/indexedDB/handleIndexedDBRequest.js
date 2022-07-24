"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(request) {
    return new Promise(function (resolve, reject) {
        request.onsuccess = function () {
            return resolve(request.result);
        };
        request.onerror = function () {
            return reject(request.error);
        };
    });
}
exports.default = default_1;
