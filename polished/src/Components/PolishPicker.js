import React from 'react'
import {Button, Title, SubTitle} from 'reactbulma'
import {Columns} from 'react-bulma-components'

//this should take in all of the polishes 
//on click this should display the selected polish. 
const PolishPicker = () => {
    return(<div>
    <Columns>
    <Columns.Column size="one-third">
        <div></div>
    </Columns.Column>
        <Columns.Column size="two-thirds">
        <div> 
            <Title is="2">Polish Picker</Title>
                <SubTitle is="5">Hit The Button & Get A Polish Recommendation</SubTitle>
            <Button>Pick a Polish</Button>  
        </div>
        </Columns.Column>  
    </Columns>
    
       
    </div>
    )
}

export default PolishPicker
