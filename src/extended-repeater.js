const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

    // set default values for options
    if (typeof options['repeatTimes'] === "undefined") options.repeatTimes = 1;
    if (typeof options['separator'] === "undefined") options.separator = '+';
    if (typeof options['addition'] === "undefined") options.addition = '';
    if (typeof options['additionRepeatTimes'] === "undefined") options.additionRepeatTimes = 1;
    if (typeof options['additionSeparator'] === "undefined") options.additionSeparator = '|';
    if (options.addition === false || options.addition === null) {
        options.addition = String(options.addition);
    }

    // create addition part of not repeated str
    let addition = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition.push(options.addition);
    };
    addition = addition.join(`${options.additionSeparator}`);

    // join addition part to str
    str += addition;

    // repeating
    let result = [];
    for (let i = 0; i < options.repeatTimes; i++) {
        result.push(str);
    };
    return result.join(`${options.separator}`);
}

module.exports = {
    repeater
};