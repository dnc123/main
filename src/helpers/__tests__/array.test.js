"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeFromArrayByKey_1 = __importDefault(require("../array/removeFromArrayByKey"));
var groupByKey_1 = __importDefault(require("../array/groupByKey"));
var findMaxValue_1 = __importDefault(require("../array/findMaxValue"));
var filterRemoveObjectDuplicates_1 = __importDefault(require("../array/filterRemoveObjectDuplicates"));
var forEachAsync_1 = __importDefault(require("../array/forEachAsync"));
var shuffle_1 = __importDefault(require("../array/shuffle"));
var sortObjectArrayByStringKey_1 = __importDefault(require("../array/sortObjectArrayByStringKey"));
test("Array shuffle", function () {
    var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    (0, shuffle_1.default)(randomNumbers);
    expect(randomNumbers).not.toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    var randomNumber = [1];
    (0, shuffle_1.default)(randomNumber);
    expect(randomNumber).toMatchObject([1]);
});
test("forEachAsync", function () { return __awaiter(void 0, void 0, void 0, function () {
    var testString, longPromise, shortPromise;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testString = "";
                longPromise = new Promise(function (resolve) {
                    setTimeout(function () {
                        return resolve("long");
                    }, 100);
                });
                shortPromise = Promise.resolve("short");
                return [4 /*yield*/, (0, forEachAsync_1.default)([longPromise, shortPromise], function (resolvedValue) { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = testString;
                                    return [4 /*yield*/, resolvedValue];
                                case 1:
                                    testString = _a + _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                expect(testString).toEqual("longshort");
                return [2 /*return*/];
        }
    });
}); });
test("Remove array duplicates", function () {
    var users = [
        { name: "Bob" },
        { name: "Cuker" },
        { name: "Bob" },
    ];
    expect((0, filterRemoveObjectDuplicates_1.default)(users, "name")).toMatchObject([
        { name: "Bob" },
        { name: "Cuker" },
    ]);
});
test("Get max", function () {
    expect((0, findMaxValue_1.default)([1, 6, 7, 4])).toEqual(7);
});
test("Remove from array by key", function () {
    var _a, _b, _c;
    var nameKey = "name";
    var joshName = "Josh";
    var sallyName = "Sally";
    var users = [
        (_a = {}, _a[nameKey] = "Bob", _a),
        (_b = {}, _b[nameKey] = joshName, _b),
        (_c = {}, _c[nameKey] = sallyName, _c),
    ];
    (0, removeFromArrayByKey_1.default)(users, nameKey, joshName);
    expect(users[1][nameKey]).toEqual(sallyName);
});
test("Group array items", function () {
    var users = [
        { age: 5 },
        { age: 16 },
        { age: 5 },
    ];
    expect((0, groupByKey_1.default)(users, "age")).toMatchObject({
        16: [
            { age: 16 },
        ],
        5: [
            { age: 5 },
            { age: 5 },
        ],
    });
});
test("Array sort by object key", function () {
    var users = [
        { name: "Bob" },
        { name: "Cuker" },
        { name: "Adam" },
    ];
    expect((0, sortObjectArrayByStringKey_1.default)(users, "name")).toMatchObject([
        { name: "Adam" },
        { name: "Bob" },
        { name: "Cuker" },
    ]);
});
