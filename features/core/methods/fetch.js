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
exports.put = exports.remove = exports.post = exports.get = void 0;
const getProjectURL_1 = __importDefault(require("../../../features/core/methods/getProjectURL"));
const get_1 = __importDefault(require("../../../helpers/cookie/get"));
const constants_1 = require("../../auth/constants");
const modules_1 = __importDefault(require("../../../features/core/constants/modules"));
function get(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetURL = getProjectURL_1.default(modules_1.default.api, endpoint);
        if (payload) {
            targetURL += `?data=${JSON.stringify(payload)}`;
        }
        return sendRequest(targetURL);
    });
}
exports.get = get;
function post(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullEndpoint = getProjectURL_1.default(modules_1.default.api, endpoint);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        if (payload) {
            requestOptions.body = JSON.stringify(payload);
        }
        return sendRequest(fullEndpoint, requestOptions);
    });
}
exports.post = post;
function remove(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullEndpoint = getProjectURL_1.default(modules_1.default.api, endpoint);
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };
        if (payload) {
            requestOptions.body = JSON.stringify(payload);
        }
        return sendRequest(fullEndpoint, requestOptions);
    });
}
exports.remove = remove;
function put() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.put = put;
function sendRequest(endpoint, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const JWTCookie = get_1.default(constants_1.JWTKey);
        if (JWTCookie) {
            if (!options.headers) {
                options.headers = {};
            }
            // @ts-ignore
            options.headers[constants_1.JWTKey] = JWTCookie;
        }
        let response = yield fetch(endpoint, options);
        if (!response.ok) {
            throw Error();
        }
        return (yield response.json()).data;
    });
}
