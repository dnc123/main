"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(targetObject) {
    let propNames = Object.getOwnPropertyNames(targetObject);
    for (let i = 0; i < propNames.length; i++) {
        let propName = propNames[i];
        if (targetObject[propName] === null || targetObject[propName] === undefined) {
            delete targetObject[propName];
        }
    }
}
exports.default = default_1;
