export default function (DB, name) {
    return DB.transaction(name, 'readwrite')
        .objectStore(name);
}
