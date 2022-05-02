const { AssertionError } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');
const seasonMonths = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

    // check for valid input
    if (!date) {
        return "Unable to determine the time of year!"
    };

    // check for valid date
    if (!(date instanceof Date) || (Object.getOwnPropertyNames(date).length > 0)) {
        throw Error("Invalid date!");
    }

    // main logic
    return seasonMonths[date.getMonth()];
}

module.exports = {
    getSeason
};