"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addMetersToLatitude_1 = __importDefault(require("../map/addMetersToLatitude"));
const addMetersToLongitude_1 = __importDefault(require("../map/addMetersToLongitude"));
const distanceBetween2CoordinatesKM_1 = __importDefault(require("../map/distanceBetween2CoordinatesKM"));
test(`Add meters to latitude`, () => {
    expect(addMetersToLatitude_1.default(15, 10000))
        .toEqual(15.089831528411953);
});
test(`Add meters to longitude`, () => {
    expect(addMetersToLongitude_1.default(15, 15, 10000))
        .toEqual(15.093000441614725);
});
test(`Distance between 2 coordinates`, () => {
    expect(distanceBetween2CoordinatesKM_1.default(15, 15, 20, 20, 4))
        .toEqual(768.9861);
});
