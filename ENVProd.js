"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = __importDefault(require("./features/core/constants/modules"));
exports.default = {
    protocol: 'https',
    domain: 'personalroute.com',
    projectIsProduction: true,
    ports: (_a = {},
        _a[modules_1.default.api] = 44444,
        _a[modules_1.default.www] = 80,
        _a[modules_1.default.admin] = null,
        _a[modules_1.default.shop] = null,
        _a[modules_1.default.movies] = null,
        _a[modules_1.default.needcaradmin] = null,
        _a[modules_1.default.needcar] = null,
        _a),
    projectProviderPublicKeyOneSignal: "52afa7eb-d2cd-4c7e-b641-b4affca80597",
    projectProviderPublicKeyFacebook: "426837044925875",
    projectProviderPublicKeyGoogleAuth: "1000147098845-n5ik13ab5ptf4rhq225tf6tb7b2pmme1.apps.googleusercontent.com",
    projectProviderPublicKeyAWS: "AKIAJEICDXTGDJNNJ4XQ",
    projectProviderPublicKeyAmadeus: "95aFxmQ631NEwvL5XnAhRm1GceJKJAj8",
    projectProviderPublicKeyStripe: "pk_live_BORdPx1wSzUS5oiqsNqSjL6B0022sqIxcy",
    projectProviderPublicKeySentry: "https://27708f76cc9a4561acbd5396c2fc29c1@o390087.ingest.sentry.io/5230925",
    projectProviderPublicKeyAnalytics: "UA-151093548-2",
    projectProviderPublicKeyRecaptcha: "6Lc-_LMZAAAAAHbFUz7j6WeLH1Oa73wvLuQS4-n1",
    projectProviderPublicKeyInstagram: "1777037419118036",
    projectProviderPublicKeyTwitter: "rxrqQqSMPyJhzJ167n3LIMW4s",
    projectProviderPublicKeyTwitterAccessToken: "967791797236887552-p23tcpi1ID5oZGXf1T9uID8zN6unCBq",
    clientProxyDomain: "personalroute.com",
};
