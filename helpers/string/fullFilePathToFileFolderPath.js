export default function (filePath) {
    return filePath
        .split('/')
        .slice(0, -1)
        .join('/');
}
