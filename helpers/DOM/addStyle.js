"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(stylesCSS) {
    var style = document.createElement('style');
    style.textContent = stylesCSS;
    document.head.append(style);
}
exports.default = default_1;
