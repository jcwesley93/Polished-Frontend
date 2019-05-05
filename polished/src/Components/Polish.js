import React from 'react'

const Polish = (props) => {
    return ( <div>
        <h3>{props.name}</h3>
        <h5>{props.brand}</h5>
        <img src={props.img} alt={props.name} />
        <div>
            <p> {props.description} </p>
            <p> {props.color_category} </p>
            <p> {props.season}</p>
        </div>


    </div>
    )
}

export default Polish