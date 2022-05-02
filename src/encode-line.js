const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let temp = '';
    const arr1 = [];
    str.split('').forEach((value, index, arr) => {
        if (arr[index] === arr[index + 1]) {
            temp === '' ? temp = 2 : temp++;
        } else {
            arr1.push(temp + value)
            temp = '';
        }
    })
    return arr1.join('')
}

module.exports = {
    encodeLine
};