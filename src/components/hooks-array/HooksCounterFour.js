import React, { useState } from 'react'

function HooksCounterFour() {
    const [items, setItems] = useState([])
    const addItem = () =>{
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 100) + 1 //it gives you random numbers between 1 to 100
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HooksCounterFour
