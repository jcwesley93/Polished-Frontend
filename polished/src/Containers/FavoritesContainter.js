import React from 'react'
import Polish from '../Components/Polish'

class FavoritesContainer extends React.Component{
    render(){
        return(<div>
            {this.props.polishes.map(polish => <div> 
            <Polish name={polish.name} 
            img={polish.img} 
            description={polish.description} /> 
            <button onClick={() => this.props.handleUnfavorited(polish)} name="unfavorite">UnFavorite</button>
            </div>)}
            
        </div>)
    }
}

export default FavoritesContainer