import getTable from './getTable';
import getDatabase from './getDatabase';
import handleIndexedDBRequest from './handleIndexedDBRequest';
export default async function (tableName, filters) {
    const results = await handleIndexedDBRequest(getTable(await getDatabase(), tableName).getAll());
    if (filters) {
        const filtersArr = Object.entries(filters);
        return results.filter((result) => {
            for (let i = 0; i < filtersArr.length; i++) {
                const [targetProp, targetValue] = filtersArr[i];
                if (result[targetProp] === targetValue) {
                    return true;
                }
            }
        });
    }
    return results;
}
