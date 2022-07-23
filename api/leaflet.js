var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import addHeadElement from '../helpers/DOM/addHeadElement';
const VERSION = '1.8.0';
let client;
export function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client) {
            client = yield loadClient();
        }
        return client;
    });
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
