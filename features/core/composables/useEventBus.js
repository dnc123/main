"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventBus = void 0;
var vue_1 = require("vue");
function useEventBus() {
    var subscribers = vue_1.reactive({});
    var subscribersOnce = vue_1.reactive({});
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
            ? __spreadArray(__spreadArray([], subscribers[key]), [callback]) : subscribers[key] = [callback];
    }
    function busOnce(key, callback) {
        subscribersOnce[key] = !!subscribersOnce[key]
            ? __spreadArray(__spreadArray([], subscribersOnce[key]), [callback]) : subscribersOnce[key] = [callback];
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
