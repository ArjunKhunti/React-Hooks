import React, { useState } from 'react'

function HooksCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    
    return (
        <div>
            Count : {count}
            <div>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            </div>
            <div>
                <button onClick={() => setCount(initialCount)}>Reset</button>
            </div>
            <div>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            </div>
            <div>
                <button onClick={incrementFive}>Increment 5</button>
            </div>
        </div>
    )
}

export default HooksCounterTwo
