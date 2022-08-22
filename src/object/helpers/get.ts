export default get;
function get(o: object, key: string | number | symbol, defaultValue: any) {
    const val = Reflect.get(o, key);
    if (typeof val === "undefined" || val === null) {
        return defaultValue;
    }
    return Reflect.get(o, key);
}
