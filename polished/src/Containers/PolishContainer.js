import React from 'react'
import Polish from '../Components/Polish.js'
import PolishFilter from '../Components/PolishFilter.js'
import NewPolishForm from '../Components/NewPolishForm.js'
import FavoritesContainer from './FavoritesContainter.js'

import {Button, SubTitle, Level}from 'reactbulma'
import { Columns } from 'react-bulma-components'


class PolishContainer extends React.Component {

    render(){
        return (<div>
        <Level>
            <Level.Left>
                <Level.Item>
                 <SubTitle>Filter By Season</SubTitle>
                </Level.Item>
                <Level.Item>
                <PolishFilter handleSeasonCategoryChange={this.props.handleSeasonChange}
                handleColorCategoryChange={this.props.handleColorChange} />
                </Level.Item>
            </Level.Left>
        </Level>

        <Columns>
             {this.props.polishes.map(polish =><Columns.Column size="one-quarter"> <div><Polish 
             name={polish.name}
             brand={polish.brand}
             img={polish.img}
             description={polish.description}
             handleFavorited={this.props.handleFavorited} 
             method={() => this.props.handleFavorited(polish)}
             buttonName="Favorite"/>
             </div>
             </Columns.Column> )}
        </Columns>
        </div>
        )
    }
}

export default PolishContainer

