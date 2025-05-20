import { useEffect } from 'react'

export function useDebounce ({ fn, delay = 300, deps = [] }) {
  useEffect(() => {
    const IdTimeout = setTimeout(fn, delay)

    return () => clearTimeout(IdTimeout)
  }, [...deps])
}
