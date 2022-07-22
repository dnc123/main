export default function (tag, attributes, callback) {
    const headElement = document.createElement(tag);
    Object.keys(attributes).forEach((attribute) => {
        headElement.setAttribute(attribute, attributes[attribute]);
    });
    if (callback) {
        //@ts-ignore
        headElement.onload = callback;
    }
    document.head.appendChild(headElement);
}
