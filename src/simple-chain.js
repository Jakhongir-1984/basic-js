const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length();
    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || position % 1 != 0 || position < 1 || position > this.chain.length) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        }

        let temp = this.chain.map((num, index) => { if (index !== (position - 1)) return num })
            .filter(x => x !== undefined);
        this.chain = temp;
        return this;

    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let temp = this.chain;
        this.chain = [];
        return temp.join("~~");
    }
};

module.exports = {
    chainMaker
};