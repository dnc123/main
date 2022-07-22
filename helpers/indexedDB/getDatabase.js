import getIDBVersion from './getIDBVersion';
export default function (IDBUpdateHandler, IDBSeedHandler) {
    return new Promise((resolve, reject) => {
        const createDBRequest = indexedDB.open('core', getIDBVersion(IDBUpdateHandler, IDBSeedHandler));
        let tempDB;
        let isUpgradeFinished = false;
        createDBRequest.onupgradeneeded = async () => {
            if (IDBUpdateHandler) {
                await IDBUpdateHandler(createDBRequest.result);
            }
            if (IDBSeedHandler) {
                await IDBSeedHandler();
            }
            if (tempDB) {
                return resolve(tempDB);
            }
            else {
                isUpgradeFinished = true;
            }
        };
        createDBRequest.onsuccess = async () => {
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
        };
        createDBRequest.onerror = (err) => {
            return reject();
        };
    });
}
