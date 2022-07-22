const timers = {};
export default function (uniqueKey, timeThresholdMS, callback) {
    if (timers[uniqueKey]) {
        clearTimeout(timers[uniqueKey]);
    }
    timers[uniqueKey] = setTimeout(callback, timeThresholdMS);
}
