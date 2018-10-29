import { useEffect, useRef } from 'react'

/**
 * Hook to get previous value of a prop or a state value.
 * Straight out of [React docs](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 * @param {Any} value
 */
export default function usePrev (value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}
