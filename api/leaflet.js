"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const addHeadElement_1 = __importDefault(require("../helpers/DOM/addHeadElement"));
const VERSION = '1.8.0';
let client;
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client) {
            client = yield loadClient();
        }
        return client;
    });
}
exports.getClient = getClient;
function loadClient() {
    client = new Promise((resolve) => {
        addHeadElement_1.default(`link`, {
            rel: `stylesheet`,
            href: `https://unpkg.com/leaflet@${VERSION}/dist/leaflet.css`,
            crossorigin: ``,
        });
        addHeadElement_1.default(`script`, {
            src: `https://unpkg.com/leaflet@${VERSION}/dist/leaflet.js`,
        }, () => {
            // @ts-ignore
            return resolve(window.leaflet);
        });
    });
    return client;
}
