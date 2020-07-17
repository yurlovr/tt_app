const moment = require('moment')

export default function getTaskTime (data, created) {
  if (!data) return 'Время неизвестно'
  const day = Math.floor(data / 24)
  const hours = data % 24
  if (created) {
    const date = moment(created, "DD.MM.YYYY hh:mm").add(data, 'h').format('DD.MM.YYYY')
    return `${day}д. ${hours}ч. (до ${date})`
  }
  return `${day}д. ${hours}ч.`
}