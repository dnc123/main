export default function (value) {
    try {
        JSON.parse(value);
        return true;
    }
    catch (e) {
        return false;
    }
}
