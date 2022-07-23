"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(blob) {
    return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.addEventListener('loadend', function () {
            resolve(reader.result);
        });
        reader.readAsDataURL(blob);
    });
}
exports.default = default_1;
