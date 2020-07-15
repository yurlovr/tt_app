export default function getTaskTime (data) {
  const day = Math.floor(data / 24)
  const hours = data % 24
  return day + 'д. ' +  hours + 'ч.'
}