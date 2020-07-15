var moment = require('moment');

const now = moment()
console.log(now)
const created = moment('10.07.2020 10:38', "DD.MM.YYYY hh:mm")
console.log(created)
console.log(now.diff(created, 'hours'))
console.log((now.diff(created, 'hours') * 100) / 876)