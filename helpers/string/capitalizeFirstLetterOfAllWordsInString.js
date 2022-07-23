import capitalizeFirstLetter from './capitalizeFirstLetter';
export default function (sentence) {
    return sentence
        .split(` `)
        .map(capitalizeFirstLetter)
        .join(` `);
}
