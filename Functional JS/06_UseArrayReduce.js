// const countWords = inputWords => {
//     return inputWords.reduce((total, currentValue) => {
//         if (total[currentValue] === undefined) {
//             total[currentValue] = 1;
//         }
//         else {
//             total[currentValue]++;
//         }
//         return total;
//     }, {});
// };

/** Given Solution */
const countWords = arr => {
    return arr.reduce((countMap, word) => {
        countMap[word] = ++countMap[word] || 1;
        return countMap;
    }, {});
}

module.exports = countWords;