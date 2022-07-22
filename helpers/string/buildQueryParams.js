export default function (keyValQueryParams = {}) {
    return Object.keys(keyValQueryParams)
        .filter((key) => {
        return keyValQueryParams[key] !== null
            && typeof keyValQueryParams[key] !== `undefined`;
    })
        .map((key) => {
        return `${key}=${keyValQueryParams[key]}`;
    })
        .join(`&`);
}
