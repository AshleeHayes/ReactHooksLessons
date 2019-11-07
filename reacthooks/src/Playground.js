import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'

// where we will start using Hooks and then switch to Paint 
// 1- useState hook
//useState is a function, takes initial state as parameter

export default function Playground() {
  //i've set the initial state to 0 here
  // returns an array (using array destructuring) of 2 items and naming them at same time
 // rename this: const [state, setState] = useState(0)
 // holding state in count- update state in setCount
 const [count, setCount] = useState(0)

 return (
   <div>
     {count}
     <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
     <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
   </div>
 )
  
}

// https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578
//performance issues of inline functions