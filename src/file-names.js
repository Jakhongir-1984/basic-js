const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let result = [];
    let heap = {};
    names.forEach(function(name) {
        if (!(name in heap)) {
            heap[name] = 0;
        }
        let newName = name + (heap[name] > 0 ? '(' + heap[name] + ')' : "");
        result.push(newName);
        if (!(newName in heap)) {
            heap[newName] = 0;
        }
        if (newName != name) {
            heap[newName]++;
        }
        heap[name]++;
    });
    return result;
}

module.exports = {
    renameFiles
};