import getTable from './getTable';
import getDatabase from './getDatabase';
import handleIndexedDBRequest from './handleIndexedDBRequest';
export default async function (tableName, dataToInsert) {
    // if (!dataToInsert.createdAt) {
    // 	dataToInsert.createdAt = +new Date();
    // }
    return handleIndexedDBRequest(getTable(await getDatabase(), tableName).add(dataToInsert));
}
