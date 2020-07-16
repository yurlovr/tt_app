export const getStorage = (key) => {
  const result = localStorage.getItem(key)
  if (result) return JSON.parse(result)
  return null
}

export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}