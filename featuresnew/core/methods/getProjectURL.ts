import ENV from '../../../ENV';
import modules from '../constants/modules';

export default function (module: modules, path = '') {
	const fullPath = path ? `/${path}` : '';

	return `${ENV.protocol}://${getSubdomain(module)}${ENV.domain}${getPort(module)}${fullPath}`;
}

function getSubdomain (module: modules) {
	if (!ENV.projectIsProduction || module === modules.movies || module === modules.www) {
		return '';
	}

	return `${module}.`;
}

function getPort (module: modules) {
	if (ENV.projectIsProduction) {
		return '';
	}

	if (ENV.ports[module]) {
		return `:${ENV.ports[module]}`;
	}

	return '';
}
