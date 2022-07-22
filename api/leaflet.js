import addHeadElement from '../helpers/DOM/addHeadElement';
const VERSION = '1.8.0';
let client;
export async function getClient() {
    if (!client) {
        client = await loadClient();
    }
    return client;
}
function loadClient() {
    client = new Promise((resolve) => {
        addHeadElement(`link`, {
            rel: `stylesheet`,
            href: `https://unpkg.com/leaflet@${VERSION}/dist/leaflet.css`,
            crossorigin: ``,
        });
        addHeadElement(`script`, {
            src: `https://unpkg.com/leaflet@${VERSION}/dist/leaflet.js`,
        }, () => {
            // @ts-ignore
            return resolve(window.leaflet);
        });
    });
    return client;
}
