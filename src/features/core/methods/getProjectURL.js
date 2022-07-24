"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ENV_1 = __importDefault(require("../../../ENV"));
var modules_1 = __importDefault(require("../../../features/core/constants/modules"));
function default_1(module, path) {
    if (path === void 0) { path = ''; }
    var fullPath = path ? "/".concat(path) : '';
    return "".concat(ENV_1.default.protocol, "://").concat(getSubdomain(module)).concat(ENV_1.default.domain).concat(getPort(module)).concat(fullPath);
}
exports.default = default_1;
function getSubdomain(module) {
    if (!ENV_1.default.projectIsProduction || module === modules_1.default.movies || module === modules_1.default.www) {
        return '';
    }
    return "".concat(module, ".");
}
function getPort(module) {
    if (ENV_1.default.projectIsProduction) {
        return '';
    }
    if (ENV_1.default.ports[module]) {
        return ":".concat(ENV_1.default.ports[module]);
    }
    return '';
}
