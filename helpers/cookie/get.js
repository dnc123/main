import { get as getCookie } from 'js-cookie';
export default function (key) {
    return getCookie(key);
}
