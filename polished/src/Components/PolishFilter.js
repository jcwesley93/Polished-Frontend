import React from 'react'

const PolishFilter = (props) => {
    return( <div>
        <div>
        <select onChange= {props.handleCategoryChange}>
            <option value= "all"> All </option>
            <option value= "summer"> Summer </option>
            <option value= "fall"> Fall </option>
            <option value= "winter"> Winter </option>
            <option value= "spring"> Spring </option>
        </select>
        </div>
        
        {/* <div>
        <select>
            <option value= "Greens"> Green </option>
            <option value= "Yellows"> Yellow </option>
            <option value= "Metallics & Glitters"> Metallic/Glitter </option>
            <option value= "Grays"> Gray </option>
        </select>
        </div> */}


    </div>

    )
}

//Do I need diffent filter Components for filtering by different categories?

export default PolishFilter