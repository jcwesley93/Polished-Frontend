import React from 'react'
import Polish from '../Components/Polish'

import { SubTitle} from 'reactbulma'
import { Columns } from 'react-bulma-components'

class FavoritesContainer extends React.Component{
    render(){
        return(<div>
            <SubTitle>Favorites</SubTitle>
            <Columns>
            {this.props.polishes.map(polish => <Columns.Column size='one-quarter'> <div> 
            <Polish name={polish.name} 
            img={polish.img} 
            description={polish.description} 
            brand={polish.brand}
            method={() => this.props.handleUnfavorited(polish)}
            buttonName="Unfavorite"/> 
            </div></Columns.Column>)}
            </Columns>
        </div>)
    }
}

export default FavoritesContainer