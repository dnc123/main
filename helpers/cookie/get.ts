import {get as getCookie} from 'js-cookie';

export default function (key: string) {
	return getCookie(key);
}
