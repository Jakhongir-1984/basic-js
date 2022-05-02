const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let teamName = "";
    // check for valid input
    if (members == null) {
        return false;
    }
    // main logic
    for (let index = 0; index < members.length; index++) {
        if (typeof members[index] === 'string') {
            // remove whitespace so when it takes first char it will not be simple space
            let str = members[index].replace(/\s/g, '');
            teamName += str[0];
        }
    }
    // check for valid members of input
    if (teamName == "") {
        return false;
    }
    // sort in aplhabetical order, make uppercase and return true result
    else {
        teamName = teamName.toUpperCase();
        return teamName.split('').sort().join('');
    }
}

module.exports = {
    createDreamTeam
};