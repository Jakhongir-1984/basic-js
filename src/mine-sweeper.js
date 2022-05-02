const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const matrixCopy = JSON.parse(JSON.stringify(matrix))
    matrix.map((value, index, array) => {
        value.forEach((val, i, arr) => {
            if (val === true) {
                matrixCopy[index][i] = 1;
            } else if (val === false) {
                matrixCopy[index][i] = 0;
                //top-left
                if (i > 0 && index > 0 && (matrix[index - 1][i - 1] === true)) {
                    matrixCopy[index][i]++;
                }
                //top
                if (index > 0 && (matrix[index - 1][i] === true)) {
                    matrixCopy[index][i]++;
                }
                //top-right
                if (i < arr.length - 1 && index > 0 && (matrix[index - 1][i + 1] === true)) {
                    matrixCopy[index][i]++;
                }
                //right
                if (i < arr.length - 1 && (matrix[index][i + 1] === true)) {
                    matrixCopy[index][i]++;
                }
                //bottom-right
                if (i < arr.length - 1 && index < array.length - 1 && (matrix[index + 1][i + 1] === true)) {
                    matrixCopy[index][i]++;
                }
                //bottom
                if (index < array.length - 1 && (matrix[index + 1][i] === true)) {
                    matrixCopy[index][i]++;
                }
                //bottom-left
                if (i > 0 && index < array.length - 1 && (matrix[index + 1][i - 1] === true)) {
                    matrixCopy[index][i]++;
                }
                //left
                if (i > 0 && (matrix[index][i - 1] === true)) {
                    matrixCopy[index][i]++;
                }
            }
        })
        return value;
    })
    return matrixCopy;
}

module.exports = {
    minesweeper
};