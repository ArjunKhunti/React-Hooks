import React, { useState, useEffect } from 'react'

function HooksUseEffectCounter() {

    const [count, setCount] = useState(0) //Array Destructuring ES6 Concept
    const [name, setName] = useState('')
    
     // useEffect run after every render
    useEffect(() => {
        console.log("Updating Document Title")
        document.title = `Clicked ${count} times`
    }, [count])

    // second parameter of useEffect accept the rendering condition
    // Here it only render while count get affected


    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksUseEffectCounter
