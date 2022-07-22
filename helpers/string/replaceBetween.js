export default function (source, newString, startIndex, endIndex) {
    return `${source.substring(0, startIndex)}${newString}${source.substring(endIndex)}`;
}
