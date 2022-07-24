"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(DB, name) {
    return DB.transaction(name, 'readwrite')
        .objectStore(name);
}
exports.default = default_1;
