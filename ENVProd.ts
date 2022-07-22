import modules from './features/core/constants/modules';

export default {
	protocol: 'https',
	domain: 'personalroute.com',
	projectIsProduction: true,

	ports: {
		[modules.api]: 44444,
		[modules.www]: 80,
		[modules.admin]: null, //todo should not be null
		[modules.shop]: null, //todo should not be null
		[modules.movies]: null,
		[modules.needcaradmin]: null,
		[modules.needcar]: null,
	},

	projectProviderPublicKeyOneSignal: `52afa7eb-d2cd-4c7e-b641-b4affca80597`,
	projectProviderPublicKeyFacebook: `426837044925875`,
	projectProviderPublicKeyGoogleAuth: `1000147098845-n5ik13ab5ptf4rhq225tf6tb7b2pmme1.apps.googleusercontent.com`,
	projectProviderPublicKeyAWS: `AKIAJEICDXTGDJNNJ4XQ`,
	projectProviderPublicKeyAmadeus: `95aFxmQ631NEwvL5XnAhRm1GceJKJAj8`,
	projectProviderPublicKeyStripe: `pk_live_BORdPx1wSzUS5oiqsNqSjL6B0022sqIxcy`,
	projectProviderPublicKeySentry: `https://27708f76cc9a4561acbd5396c2fc29c1@o390087.ingest.sentry.io/5230925`,
	projectProviderPublicKeyAnalytics: `UA-151093548-2`, //todo check if still needed
	projectProviderPublicKeyRecaptcha: `6Lc-_LMZAAAAAHbFUz7j6WeLH1Oa73wvLuQS4-n1`,
	projectProviderPublicKeyInstagram: `1777037419118036`,
	projectProviderPublicKeyTwitter: `rxrqQqSMPyJhzJ167n3LIMW4s`,
	projectProviderPublicKeyTwitterAccessToken: `967791797236887552-p23tcpi1ID5oZGXf1T9uID8zN6unCBq`,
	clientProxyDomain: `personalroute.com`,
};
