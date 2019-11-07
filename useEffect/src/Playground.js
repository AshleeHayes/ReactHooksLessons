import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'

//everytime we update count, lets change th color of something

export default function Playground() {

 const [count, setCount] = useState(0)

 const [color, setColor] = useState(null)
 useEffect(() => {
   setColor(randomColor())
 }, [count])
 // [count] is dependency - tells useeffect if you detect a rerender but you check this value and nothing has changed do NOT rerun

 return (
  <div style={{ borderTop: `10px solid ${color}`}}>
     {count}
     <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
     <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
   </div>
 )
  
}

// comp runs the first time, it calls useeffect, which sets the color, whiche causes rerender. Then infinite loop. 
// YES we can alter it so it only runs when the count changes- we add a list of dependencies or things triggered when called