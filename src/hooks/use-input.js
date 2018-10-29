import { useState } from 'react'

/**
 * Hook for input values
 * @param {Any} initial Initial input value
 * @param {Function} validation Validation function
 *
 * @example
 * import { useInput } from 'react-easy-hooks'
 *
 * const Component = () => {
 *     const name = useInput('Tiaan', (val) => val.length > 3)
 *     return <div>
 *          {!name.valid && 'Invalid'}
 *          <input {...name}/>
 *      </div>
 * }
 */
export default function useInput (initial = '', validation = () => true) {
  const [value, setVal] = useState(initial)
  const onChange = e => setVal(e.target.value)

  return {
    value,
    valid: validation(value),
    onChange
  }
}
