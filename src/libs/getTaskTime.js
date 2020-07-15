export default function getTaskTime (data) {
  if (!data) return 'Время неизвестно'
  const day = Math.floor(data / 24)
  const hours = data % 24
  return day + 'д. ' +  hours + 'ч.'
}