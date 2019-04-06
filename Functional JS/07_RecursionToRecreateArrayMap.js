const reduce = (arr, fn, init) => {
    if (!Array.isArray(arr) || !arr.length) return init;
    const newArr = arr.splice(1);

    /** Function passed into reduce method
    /* @param prev
    /* @param curr
    /* @param index
    /* @param arr
    /* @returns value merged after running function
    /* ex. fn(prev, curr, index, arr);
    */
   init = fn(init, arr, 1, newArr)

    return reduce(newArr, fn, init);
};

module.exports = reduce;