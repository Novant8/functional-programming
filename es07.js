function reduce(arr, fn, initial) {
    arr.shift();

    if (arr.length > 0)
        return reduce(arr, fn, initial);

    return initial;
}
  
module.exports = reduce