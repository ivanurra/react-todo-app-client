import React, { useState } from 'react'

export default function CounterNew() {
  const [ value, setValue ] = useState(0);

  const add = () => setValue(value + 1)
  const substract = () => setValue(value - 1)
  return (
    <div>
        <p>{value}</p>
        <button onClick={() => substract()}>Substract</button>
        <button onClick={() => add()}>Add</button>
      </div>
  )
}
