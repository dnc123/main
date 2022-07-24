"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addMetersToLatitude_1 = __importDefault(require("../map/addMetersToLatitude"));
var addMetersToLongitude_1 = __importDefault(require("../map/addMetersToLongitude"));
var distanceBetween2CoordinatesKM_1 = __importDefault(require("../map/distanceBetween2CoordinatesKM"));
test("Add meters to latitude", function () {
    expect((0, addMetersToLatitude_1.default)(15, 10000))
        .toEqual(15.089831528411953);
});
test("Add meters to longitude", function () {
    expect((0, addMetersToLongitude_1.default)(15, 15, 10000))
        .toEqual(15.093000441614725);
});
test("Distance between 2 coordinates", function () {
    expect((0, distanceBetween2CoordinatesKM_1.default)(15, 15, 20, 20, 4))
        .toEqual(768.9861);
});
