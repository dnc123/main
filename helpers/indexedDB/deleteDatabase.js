import handleIndexedDBRequest from './handleIndexedDBRequest';
export default function (name) {
    return handleIndexedDBRequest(indexedDB.deleteDatabase(name));
}
