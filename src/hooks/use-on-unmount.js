import { useEffect } from 'react'

/**
 * Hook to call on component unmount
 * @param {Function} func Function to call
 *
 * @example
 * import { useOnUnmount } from 'react-easy-hooks'
 *
 * const Component = () => {
 *      useOnUnmount(() => { console.log('Unmounted!') })
 *      return <h1>Hi</h1>
 * }
 */
export default function useOnUnmount (func) {
  useEffect(() => func && func(), [])
}
