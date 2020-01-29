import React, {useEffect, useState} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener("mousemove", logMousePosition)
    }, [])  // [] render only once 
    
    return (
        <div>
            X: {x} Y: {y}            
        </div>
    )
}

export default HookMouse
