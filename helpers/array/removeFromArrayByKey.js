export default function (targetArr, key, isEqualTo) {
    targetArr.splice(targetArr.findIndex((item) => item[key] === isEqualTo), 1);
}
