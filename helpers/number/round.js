export default function (targetNumber, decimalPlaces = 0) {
    return +(Math.round(Number(targetNumber + `e+${decimalPlaces}`)) + `e-${decimalPlaces}`);
}
