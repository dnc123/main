export default function (array, targetKey) {
    return array.reduce((accumulator, item) => {
        accumulator[item[targetKey]] = accumulator[item[targetKey]] || [];
        accumulator[item[targetKey]].push(item);
        return accumulator;
    }, {});
}
