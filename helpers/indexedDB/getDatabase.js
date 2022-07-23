var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getIDBVersion from './getIDBVersion';
export default function (IDBUpdateHandler, IDBSeedHandler) {
    return new Promise((resolve, reject) => {
        const createDBRequest = indexedDB.open('core', getIDBVersion(IDBUpdateHandler, IDBSeedHandler));
        let tempDB;
        let isUpgradeFinished = false;
        createDBRequest.onupgradeneeded = () => __awaiter(this, void 0, void 0, function* () {
            if (IDBUpdateHandler) {
                yield IDBUpdateHandler(createDBRequest.result);
            }
            if (IDBSeedHandler) {
                yield IDBSeedHandler();
            }
            if (tempDB) {
                return resolve(tempDB);
            }
            else {
                isUpgradeFinished = true;
            }
        });
        createDBRequest.onsuccess = () => __awaiter(this, void 0, void 0, function* () {
            const DB = createDBRequest.result;
            DB.onversionchange = () => {
                createDBRequest.result.close();
            };
            if (IDBSeedHandler || IDBUpdateHandler) {
                if (isUpgradeFinished) {
                    return resolve(DB);
                }
                else {
                    tempDB = DB;
                }
            }
            else {
                return resolve(DB);
            }
        });
        createDBRequest.onerror = (err) => {
            return reject();
        };
    });
}
