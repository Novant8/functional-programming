module.exports = function arrayMap(arr, fn) {
    return arr.reduce((accumulator, element) => {
        accumulator.push(fn(element));
        return accumulator;
    }, []);
}