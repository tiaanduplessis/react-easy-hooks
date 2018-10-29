import { useState } from 'react'

/**
 *
 * @param {Boolean} initial Initial value of toggle
 *
 * @example
 * import { useToggle } from 'react-easy-hooks'
 *
 * const Component = () => {
 *    const name = useToggle()
 *
 *    return <div>
 *          <button onClick={name.toggle}>Toggle</button>
 *          {name.isOn && 'Tiaan'}
 *      </div>
 * }
 */
export default function useToggle (initial = false) {
  const [isOn, setToggle] = useState(initial)
  return {
    isOn,
    reset: () => setToggle(initial),
    toggle: () => setToggle(prev => !prev)
  }
}
