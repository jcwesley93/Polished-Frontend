import React from 'react'
import {Card, Button} from 'reactbulma'

const Polish = (props) => {
    return ( <div>
        <Card>
            <Card.Image src={props.img} alt={props.name} />
            <Card.Header>
                <Card.Header.Title>{props.name} | {props.brand}</Card.Header.Title>
            </Card.Header>    
                <Card.Content>
                <div>
                    <p> {props.description} </p>
                    <p> {props.color_category} </p>
                    <p> {props.season}</p>
                    <br/>
                    <Button danger onClick={props.method}>{props.buttonName}</Button>
                </div>
                </Card.Content>
        </Card>


    </div>
    )
}

export default Polish