export default picker;

function picker(o: object, ...keys: Array<string | symbol | number>) {
    if (keys?.length) {
        const container = {};
        keys.forEach((key) => {
            if (Reflect.has(o, key)) {
                Reflect.set(container, key, Reflect.get(o, key));
            }
        });
        return container;
    }
    return null;
}
