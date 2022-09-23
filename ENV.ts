import modules from './features/core/constants/modules';

export default {
	protocol: 'http',
	domain: 'localhost',
	projectIsProduction: false,

	ports: {
		[modules.api]: 44444,
		[modules.www]: 80,
		[modules.admin]: 3001,
		[modules.shop]: null, //todo should not be null
		[modules.movies]: 3000,
		[modules.needcaradmin]: 3431,
		[modules.needcar]: 3033,
	},

	projectProviderPublicKeyOneSignal: `adf3bad2-d950-4a75-9158-b8118340366c`,
	projectProviderPublicKeyFacebook: `426837044925875`,
	projectProviderPublicKeyGoogleAuth: `1000147098845-n5ik13ab5ptf4rhq225tf6tb7b2pmme1.apps.googleusercontent.com`,
	projectProviderPublicKeyAWS: `AKIAJEICDXTGDJNNJ4XQ`,
	projectProviderPublicKeyAmadeus: `95aFxmQ631NEwvL5XnAhRm1GceJKJAj8`,
	projectProviderPublicKeyStripe: `pk_test_TV4PQE5Wz1ifpIxUKfUKPPhK00vX34Zk4n`,
	projectProviderPublicKeySentry: `https://27708f76cc9a4561acbd5396c2fc29c1@o390087.ingest.sentry.io/5230925`,
	projectProviderPublicKeyAnalytics: null,
	projectProviderPublicKeyRecaptcha: `6Lc-_LMZAAAAAHbFUz7j6WeLH1Oa73wvLuQS4-n1`,
	projectProviderPublicKeyInstagram: `1777037419118036`,
	projectProviderPublicKeyTwitter: `rxrqQqSMPyJhzJ167n3LIMW4s`,
	projectProviderPublicKeyTwitterAccessToken: `967791797236887552-p23tcpi1ID5oZGXf1T9uID8zN6unCBq`,
	clientProxyDomain: `localhost`,
};
