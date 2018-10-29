import { useEffect } from 'react'

/**
 * Hook to call on component unmount
 * @param {Function} func Function to call
 *
 * @example
 * import { useOnMount } from 'react-easy-hooks'
 *
 * const Component = () => {
 *      useOnMount(() => { console.log('Mounted!') })
 *      return <h1>Hi</h1>
 * }
 */
export default function useOnMount (func) {
  useEffect(() => {
    func && func()
  }, [])
}
