export default function (text, stopIndex) {
    return `${text.slice(0, stopIndex)}${stopIndex < text.length ? `...` : ``}`;
}
