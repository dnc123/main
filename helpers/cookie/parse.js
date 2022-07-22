import { parse as parseCookie } from 'cookie';
export default function (cookiesString) {
    return typeof cookiesString === `string`
        ? parseCookie(cookiesString)
        : {};
}
