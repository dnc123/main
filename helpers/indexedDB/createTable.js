export default async function (DB, name, primaryKey, isPrimaryKeyAutoIncrement = false) {
    DB.createObjectStore(name, {
        keyPath: primaryKey,
        autoIncrement: isPrimaryKeyAutoIncrement,
    });
}
