"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventBus = void 0;
var vue_1 = require("vue");
function useEventBus() {
    var subscribers = (0, vue_1.reactive)({});
    var subscribersOnce = (0, vue_1.reactive)({});
    function busEmit(key, payload) {
        if (subscribersOnce[key]) {
            subscribersOnce[key].forEach(function (subscriberCallback) {
                subscriberCallback(payload);
            });
            subscribersOnce[key] = [];
        }
        if (subscribers[key]) {
            subscribers[key].forEach(function (subscriberCallback) {
                subscriberCallback(payload);
            });
        }
    }
    function busOn(key, callback) {
        subscribers[key] = !!subscribers[key]
            ? __spreadArray(__spreadArray([], subscribers[key], true), [callback], false) : subscribers[key] = [callback];
    }
    function busOnce(key, callback) {
        subscribersOnce[key] = !!subscribersOnce[key]
            ? __spreadArray(__spreadArray([], subscribersOnce[key], true), [callback], false) : subscribersOnce[key] = [callback];
    }
    function busOff(key, callback) {
        if (subscribersOnce[key]) {
            subscribersOnce[key] = subscribersOnce[key].filter(function (subscriberCallback) {
                return subscriberCallback.toString() === callback.toString();
            });
        }
        if (subscribers[key]) {
            subscribers[key] = subscribers[key].filter(function (subscriberCallback) {
                return subscriberCallback.toString() !== callback.toString();
            });
        }
    }
    return {
        busEmit: busEmit,
        busOn: busOn,
        busOff: busOff,
        busOnce: busOnce,
    };
}
exports.useEventBus = useEventBus;
