import getProjectURL from '../../../features/core/methods/getProjectURL';
import getCookie from '../../../helpers/cookie/get';
import {JWTKey} from '../../auth/constants';
import modules from '../../../features/core/constants/modules';
import {ObjectWithRandomProps} from '../../../types';

export async function get (endpoint: string, payload: ObjectWithRandomProps = {}) {
	let targetURL = getProjectURL(modules.api, endpoint);

	if (payload) {
		targetURL += `?data=${JSON.stringify(payload)}`;
	}

	return sendRequest(targetURL);
}

export async function post (endpoint: string, payload: ObjectWithRandomProps = {}) {
	const fullEndpoint = getProjectURL(modules.api, endpoint);

	const requestOptions: RequestInit = {
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

export async function remove (endpoint: string, payload: ObjectWithRandomProps = {}) {
	const fullEndpoint = getProjectURL(modules.api, endpoint);

	const requestOptions: RequestInit = {
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

export async function put () {

}

async function sendRequest (endpoint: string, options: RequestInit = {}) {
	const JWTCookie = getCookie(JWTKey);

	if (JWTCookie) {
		if (!options.headers) {
			options.headers = {};
		}

		// @ts-ignore
		options.headers[JWTKey] = JWTCookie;
	}

	let response: any = await fetch(endpoint, options);

	if (!response.ok) {
		throw Error();
	}

	return (await response.json()).data;
}
