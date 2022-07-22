export default function (inputString, stringToInsert, targetIndex) {
    return inputString.substring(0, targetIndex)
        + stringToInsert
        + inputString.substring(targetIndex, inputString.length);
}
