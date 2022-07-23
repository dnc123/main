"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventBus = void 0;
const vue_1 = require("vue");
function useEventBus() {
    const subscribers = vue_1.reactive({});
    const subscribersOnce = vue_1.reactive({});
    function busEmit(key, payload) {
        if (subscribersOnce[key]) {
            subscribersOnce[key].forEach((subscriberCallback) => {
                subscriberCallback(payload);
            });
            subscribersOnce[key] = [];
        }
        if (subscribers[key]) {
            subscribers[key].forEach((subscriberCallback) => {
                subscriberCallback(payload);
            });
        }
    }
    function busOn(key, callback) {
        subscribers[key] = !!subscribers[key]
            ? [...subscribers[key], callback]
            : subscribers[key] = [callback];
    }
    function busOnce(key, callback) {
        subscribersOnce[key] = !!subscribersOnce[key]
            ? [...subscribersOnce[key], callback]
            : subscribersOnce[key] = [callback];
    }
    function busOff(key, callback) {
        if (subscribersOnce[key]) {
            subscribersOnce[key] = subscribersOnce[key].filter((subscriberCallback) => {
                return subscriberCallback.toString() === callback.toString();
            });
        }
        if (subscribers[key]) {
            subscribers[key] = subscribers[key].filter((subscriberCallback) => {
                return subscriberCallback.toString() !== callback.toString();
            });
        }
    }
    return {
        busEmit,
        busOn,
        busOff,
        busOnce,
    };
}
exports.useEventBus = useEventBus;
