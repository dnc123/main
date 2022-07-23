"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getAll_1 = __importDefault(require("./getAll"));
var remove_1 = __importDefault(require("./remove"));
function default_1() {
    Object.keys(getAll_1.default()).forEach(function (cookieName) {
        remove_1.default(cookieName);
    });
}
exports.default = default_1;
