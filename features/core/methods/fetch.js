var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getProjectURL from '../../../features/core/methods/getProjectURL';
import getCookie from '../../../helpers/cookie/get';
import { JWTKey } from '../../auth/constants';
import modules from '../../../features/core/constants/modules';
export function get(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetURL = getProjectURL(modules.api, endpoint);
        if (payload) {
            targetURL += `?data=${JSON.stringify(payload)}`;
        }
        return sendRequest(targetURL);
    });
}
export function post(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullEndpoint = getProjectURL(modules.api, endpoint);
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
export function remove(endpoint, payload = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullEndpoint = getProjectURL(modules.api, endpoint);
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
export function put() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function sendRequest(endpoint, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const JWTCookie = getCookie(JWTKey);
        if (JWTCookie) {
            if (!options.headers) {
                options.headers = {};
            }
            // @ts-ignore
            options.headers[JWTKey] = JWTCookie;
        }
        let response = yield fetch(endpoint, options);
        if (!response.ok) {
            throw Error();
        }
        return (yield response.json()).data;
    });
}
