"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });
        reader.readAsDataURL(blob);
    });
}
exports.default = default_1;
