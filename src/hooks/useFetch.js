import React from 'react'
import { getStorage, setStorage } from '../libs/localStorage'

const useFetch = (url, options, item) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setStorage(item, json)
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    const data = getStorage(item)
    if (!data) {
      fetchData()
    } else {
      setResponse(data)
    }
  }, [url, options, item])
  return { response, error }
}

export default useFetch