"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("../cookie/get"));
const set_1 = __importDefault(require("../cookie/set"));
const cookieKeyActiveIDBVersion = 'activeIDBVersion';
function default_1(IDBUpdateHandler, IDBSeedHandler) {
    let IDBVersion = Number(get_1.default(cookieKeyActiveIDBVersion));
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
