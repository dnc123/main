"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalizeFirstLetterOfAllWordsInString_1 = __importDefault(require("./capitalizeFirstLetterOfAllWordsInString"));
function default_1(text) {
    return `#` + capitalizeFirstLetterOfAllWordsInString_1.default(text)
        .replace(/\s/g, ``);
}
exports.default = default_1;
