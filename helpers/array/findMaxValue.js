export default function (array) {
    return array.reduce((a, b) => {
        return Math.max(a, b);
    });
}
