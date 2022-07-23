"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleIndexedDBRequest_1 = __importDefault(require("./handleIndexedDBRequest"));
function default_1(name) {
    return handleIndexedDBRequest_1.default(indexedDB.deleteDatabase(name));
}
exports.default = default_1;
