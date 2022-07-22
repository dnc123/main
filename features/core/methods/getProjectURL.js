import ENV from '../../../ENV';
import modules from '../../../features/core/constants/modules';
export default function (module, path = '') {
    const fullPath = path ? `/${path}` : '';
    return `${ENV.protocol}://${getSubdomain(module)}${ENV.domain}${getPort(module)}${fullPath}`;
}
function getSubdomain(module) {
    if (!ENV.projectIsProduction || module === modules.movies || module === modules.www) {
        return '';
    }
    return `${module}.`;
}
function getPort(module) {
    if (ENV.projectIsProduction) {
        return '';
    }
    if (ENV.ports[module]) {
        return `:${ENV.ports[module]}`;
    }
    return '';
}
