const cryptoRandomString = require('crypto-random-string')

export const getRandomId = () => {
  return cryptoRandomString({length: 5});
}