const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(bool = true) {
        // true if its undefined
        this.direct = bool;
    }
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    prepareValidKey(str, key) {
        key = key.toUpperCase();
        let strArr = str.split("").filter(el => this.alphabet.includes(el)); // create array without whitespaces
        let strValidLength = strArr.length;
        let keyToAdd = strValidLength - key.length;
        return keyToAdd > 0 ?
            key.repeat(strValidLength / key.length) + key.slice(0, Math.ceil(strValidLength % key.length)) : key;
    }

    encrypt(str, key) {
        if (!str || !key) {
            throw new Error("Incorrect arguments!")
        }
        str = str.toUpperCase();
        let arr = [];
        let validKeyIndex = -1;
        let validKey = this.prepareValidKey(str, key);

        for (let i = 0; i < str.length; i++) {
            if (this.alphabet.includes(str[i])) {
                ++validKeyIndex;
                let encryptedCharCode = ((this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(validKey[validKeyIndex])) % this.alphabet.length);
                encryptedCharCode < 0 ? encryptedCharCode = this.alphabet.length + encryptedCharCode : encryptedCharCode;
                arr.push(this.alphabet[encryptedCharCode]);
            } else {
                arr.push(str[i]);
            }
        }
        return this.direct ? arr.join("") : arr.reverse().join("")
    }
    decrypt(str, key) {
        if (!str || !key) {
            throw new Error("Incorrect arguments!")
        }
        str = str.toUpperCase();
        let arr = [];
        let validKeyIndex = -1;
        let validKey = this.prepareValidKey(str, key);

        for (let i = 0; i < str.length; i++) {
            if (this.alphabet.includes(str[i])) {
                ++validKeyIndex;
                let decryptedCharCode = ((this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(validKey[validKeyIndex])) % this.alphabet.length);
                decryptedCharCode < 0 ? decryptedCharCode = this.alphabet.length + decryptedCharCode : decryptedCharCode;
                arr.push(this.alphabet[decryptedCharCode]);
            } else {
                arr.push(str[i]);
            }
        }
        return this.direct ? arr.join("") : arr.reverse().join("")
    }
}

module.exports = {
    VigenereCipheringMachine
};