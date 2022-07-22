import getDatabase from './getDatabase';
import getTable from './getTable';
import handleIndexedDBRequest from './handleIndexedDBRequest';
export default async function (tableName, targetKey) {
    return handleIndexedDBRequest(getTable(await getDatabase(), tableName).delete(targetKey));
}
