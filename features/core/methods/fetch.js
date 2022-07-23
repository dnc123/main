import getProjectURL from '../../../features/core/methods/getProjectURL';
import getCookie from '../../../helpers/cookie/get';
import { JWTKey } from '../../auth/constants';
import modules from '../../../features/core/constants/modules';
export async function get(endpoint, payload = {}) {
    let targetURL = getProjectURL(modules.api, endpoint);
    if (payload) {
        targetURL += `?data=${JSON.stringify(payload)}`;
    }
    return sendRequest(targetURL);
}
export async function post(endpoint, payload = {}) {
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
}
export async function remove(endpoint, payload = {}) {
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
}
export async function put() {
}
async function sendRequest(endpoint, options = {}) {
    const JWTCookie = getCookie(JWTKey);
    if (JWTCookie) {
        if (!options.headers) {
            options.headers = {};
        }
        // @ts-ignore
        options.headers[JWTKey] = JWTCookie;
    }
    let response = await fetch(endpoint, options);
    if (!response.ok) {
        throw Error();
    }
    return (await response.json()).data;
}
