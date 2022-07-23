"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = __importDefault(require("./features/core/constants/modules"));
exports.default = {
    protocol: 'http',
    domain: 'localhost',
    projectIsProduction: false,
    ports: {
        [modules_1.default.api]: 44444,
        [modules_1.default.www]: 80,
        [modules_1.default.admin]: 3001,
        [modules_1.default.shop]: null,
        [modules_1.default.movies]: 3000,
        [modules_1.default.needcaradmin]: 3431,
        [modules_1.default.needcar]: 3033,
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
