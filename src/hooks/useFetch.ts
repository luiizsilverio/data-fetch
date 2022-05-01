import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export function useFetch<T>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    axios.get(url, options)
      .then(response => setData(response.data))
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [])

  return { data, isLoading, error }
}
