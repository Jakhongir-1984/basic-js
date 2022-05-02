const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {

    // remove ( - )
    let str = inputString
    for (let i = 0; i < 5; i++) {
        str = str.replace('-', '');
    }

    // check for input
    if (str.length > 12 || typeof inputString !== 'string') {
        return false;
    } else {
        return /^[A-F0-9]*$/.test(str);
    }
}
module.exports = {
    isMAC48Address
};