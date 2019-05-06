import React from 'react'

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
            <h5>Add A New Polish</h5>
            <form onSubmit={(event) => this.props.handleFormSubmit(event, this.state)}>
                <label>Name: </label> 
                <input onChange={this.handleInputChange} type="text" name="name"/>
                <br/>
                <label>Brand: </label> 
                <input onChange={this.handleInputChange} type="text" name="brand"/>
                <br/>
                <label>Description: </label>
                <input onChange={this.handleInputChange} type="text" name="description"/>
                <br/>
                <label>Price ($USD): </label>
                <input  onChange={this.handleInputChange} type="number" name="price" />
                <br/>
                <label>Image: </label>
                <input  onChange={this.handleInputChange} type="text" name="img" />
                <br/>
                <label>Link: </label>
                <input  onChange={this.handleInputChange} type="text" name="link" />
                <br/>
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
                <br/>
                <input type="submit" value="Submit"/>
                <br/>
                <br/>
            </form>
        </div>
        )
    }
}

export default NewPolishForm
