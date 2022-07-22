export default function (items, targetKey) {
    return items.filter((itemA, index) => {
        return items
            .map((itemB) => itemB[targetKey])
            .indexOf(itemA[targetKey]) === index;
    });
}
