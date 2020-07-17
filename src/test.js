const moment = require('moment')

function getTaskTime (data, created) {
  if (!data) return 'Время неизвестно'
  const day = Math.floor(data / 24)
  const hours = data % 24
  if (created) {
    const date = moment(created, "DD.MM.YYYY hh:mm").add(data, 'h').format('DD.MM.YYYY hh:mm')
    console.log(typeof date)
  }
  return day + 'д. ' +  hours + 'ч.'
}

getTaskTime( 24 ,"15.07.2020 10:38")