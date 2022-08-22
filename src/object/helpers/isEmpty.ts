/**检测对象是否是空对象 */
export default isEmpty;

/**
 *
 * @param o 目标对象
 * @param enumerable 是否包含不可枚举属性,默认不包含
 */
function isEmpty(o: object, enumerable = false) {
    if (!o || typeof o !== "object")
        throw new Error(
            "isEmpty函数期望接收一个object类型的参数，实际上:" + typeof o
        );
    const keys = enumerable ? Object.getOwnPropertyNames(o) : Object.keys(o);
    return Boolean(keys.length);
}
