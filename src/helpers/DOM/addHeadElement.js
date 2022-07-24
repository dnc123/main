"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(tag, attributes, callback) {
    var headElement = document.createElement(tag);
    Object.keys(attributes).forEach(function (attribute) {
        headElement.setAttribute(attribute, attributes[attribute]);
    });
    if (callback) {
        //@ts-ignore
        headElement.onload = callback;
    }
    document.head.appendChild(headElement);
}
exports.default = default_1;
