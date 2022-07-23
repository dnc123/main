export default function (dateObject) {
    return dateObject && typeof dateObject.getMonth === `function`;
}
