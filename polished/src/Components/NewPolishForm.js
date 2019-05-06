import React from 'react'

class NewPolishForm extends React.Component {
    render(){
        return(<div>
            <h5>Add A New Polish</h5>
            <form>
                <label>Name: </label> 
                <input type="text" name="name" value="Name"/>
                <br/>
                <label>Brand: </label> 
                <input type="text" name="brand" value="Brand"/>
                <br/>
                <label>Description: </label>
                <input type="text" name="description" value="Description"/>
                <br/>
                <label>Price: </label>
                <input type="number" name="price" value="0.00"/>
                <br/>
                <label>Image: </label>
                <input type="text" name="img" value="Image URL"/>
                <br/>
                <label>Link: </label>
                <input type="text" name="link" value="Product URL"/>
                <br/>
                <label>Color Category: </label> 
                <select>
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
                <select>
                <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                </select>
            </form>
        </div>
        )
    }
}

export default NewPolishForm
