// Object as a state variable

import React, { useState } from 'react'

function HooksCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} /> 
                {/* Spread operator
                    ... name
                    It will first update name and then override another property
                */}
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
                <h2>First Name : {name.firstName}</h2>
                <h2>Last Name : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2> {/* It append the textbox value in a json file  */}
            </form>
        </div>
    )
}

export default HooksCounterThree
