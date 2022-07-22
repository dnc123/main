import ENVBoth from '../../ENV';
import { set as setCookie } from 'js-cookie';
const DAYS_IN_YEAR = 365;
export default function (key, value, expiresInDays = DAYS_IN_YEAR, isSharedAcrossSubdomains = false) {
    const options = {
        expires: expiresInDays,
    };
    if (isSharedAcrossSubdomains) {
        options.domain = ENVBoth.clientProxyDomain;
    }
    setCookie(key, value, options);
}
