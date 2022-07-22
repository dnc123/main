import capitalizeFirstLetterOfAllWordsInString from './capitalizeFirstLetterOfAllWordsInString';
export default function (text) {
    return `#` + capitalizeFirstLetterOfAllWordsInString(text)
        .replace(/\s/g, ``);
}
