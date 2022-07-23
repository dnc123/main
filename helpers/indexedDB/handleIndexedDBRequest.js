export default function (request) {
    return new Promise((resolve, reject) => {
        request.onsuccess = () => {
            return resolve(request.result);
        };
        request.onerror = () => {
            return reject(request.error);
        };
    });
}
