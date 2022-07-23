"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("../cookie/get"));
var set_1 = __importDefault(require("../cookie/set"));
var cookieKeyActiveIDBVersion = 'activeIDBVersion';
function default_1(IDBUpdateHandler, IDBSeedHandler) {
    var IDBVersion = Number(get_1.default(cookieKeyActiveIDBVersion));
    if (isNaN(IDBVersion)) {
        IDBVersion = 1;
        set_1.default(cookieKeyActiveIDBVersion, String(IDBVersion));
    }
    else {
        if (IDBUpdateHandler || IDBSeedHandler) {
            IDBVersion += 1;
            set_1.default(cookieKeyActiveIDBVersion, String(IDBVersion));
        }
    }
    return IDBVersion;
}
exports.default = default_1;
