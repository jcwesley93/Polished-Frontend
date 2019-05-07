import React from 'react'
import {SubTitle, Input, Card, Button, Level, Control} from "reactbulma"
import {Columns} from 'react-bulma-components'

class NewPolishForm extends React.Component {

    state={
        name:"",
        brand:"", 
        description: "", 
        price: 0.00, 
        img: "", 
        link: "", 
        color_category: null, 
        season: null
     }

    //onChange update the specific states
    handleInputChange = (event) =>{
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    //onSubmit take in the whole state (an object of a new nail polish)
    render(){
        return(<div>
        <Columns>
        <Columns.Column size="one-third">
            <div></div>
        </Columns.Column>
            <Columns.Column size="one-third">
            <div><Card>
            <Card.Header>
                <Card.Header.Title centered> Add A New Polish!</Card.Header.Title>
            </Card.Header>
            <Card.Content>
            <form onSubmit={(event) => this.props.handleFormSubmit(event, this.state)}>
                <label>Name: </label> 
                <Input danger placeholder="Name" onChange={this.handleInputChange} type="text" name="name"/>
                <br/>
                <label>Brand: </label> 
                <Input danger placeholder="Brand" onChange={this.handleInputChange} type="text" name="brand"/>
                <br/>
                <label>Description: </label>
                <Input danger placeholder="Description" onChange={this.handleInputChange} type="text" name="description"/>
                <br/>
                <label>Price ($USD): </label>
                <Input danger placeholder="0.00" onChange={this.handleInputChange} type="number" name="price" />
                <br/>
                <label>Image: </label>
                <Input danger placeholder="Image URL"  onChange={this.handleInputChange} type="text" name="img" />
                <br/>
                <label>Link: </label>
                <Input danger placeholder="Link URL"   onChange={this.handleInputChange} type="text" name="link" />
                <br/>
                <br/>
                <Level>
                <label>Color Category: </label> 
                <select onChange={this.handleInputChange} name="color_category">
                    <option value="Sheers">Sheer</option>
                    <option value="Whites">White</option>
                    <option value="Nudes">Nude</option>
                    <option value="Pinks">Pink</option>
                    <option value="Reds">Red</option>
                    <option value="Purples">Purple</option>
                    <option value="Blues">Blue</option>
                    <option value="Greens">Green</option>
                    <option value="Yellows">Yellow</option>
                    <option value="Grays">Gray</option>
                    <option value="Metalics & Glitters">Metalics & Glitters</option>
                </select>
                <br/>
                <label>Season: </label>
                <select onChange={this.handleInputChange} name="season">
                <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                </select>
                </Level>
                <Button danger type="submit" value="Submit">Add New Polish</Button>
                <br/>
            </form>
            </Card.Content>
            </Card></div>
            </Columns.Column>
        </Columns>
        </div>
        )
    }
}

export default NewPolishForm
