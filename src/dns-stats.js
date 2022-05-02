const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const dnsObj = {};
    domains.forEach((value) => {
        let dns = value.split('.');
        let dnsCopy = '';
        dns.reverse().forEach(val => {
            dnsCopy += `.${val}`;
            dnsObj[dnsCopy] === undefined ? dnsObj[dnsCopy] = 1 : dnsObj[dnsCopy]++;
        })
    })
    return dnsObj;
}

module.exports = {
    getDNSStats
};