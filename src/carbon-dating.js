const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const log2 = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    // check for valid input
    if (typeof sampleActivity != 'string' || Number(sampleActivity) > MODERN_ACTIVITY || Number(sampleActivity) < 1 || Number.isNaN(Number(sampleActivity))) {
        return false;
    }
    // main logic
    else {
        let k = log2 / HALF_LIFE_PERIOD;
        let years = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k;
        return Math.ceil(years);
    }
}
module.exports = {
    dateSample
};