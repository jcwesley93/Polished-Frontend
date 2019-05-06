import React from 'react'
import Polish from '../Components/Polish.js'
import PolishFilter from '../Components/PolishFilter.js'
import NewPolishForm from '../Components/NewPolishForm.js'
import FavoritesContainer from './FavoritesContainter.js'




class PolishContainer extends React.Component {


    // The second filter does not work on already filtered things. 
    // handleColorCategoryChange = (event) => {
    //     let filteredPolishes = [...this.state.filteredPolishes]
    //     if(event.target.value === 'All'){
    //         this.setState({
    //             filteredPolishes: [...this.state.filteredPolishes]
    //         })
    //     } else if (event.target.value === 'Greens'){
    //         let filteredPolishesArray = filteredPolishes.filter(polish =>
    //             polish.color_category === 'Greens')
    //         this.setState({
    //             filteredPolishes: filteredPolishesArray
    //          })
    //     }
    // }




    render(){
        return (<div>
        {/* <FavoritesContainer /> */}
        <PolishFilter handleSeasonCategoryChange={this.props.handleSeasonChange} />
        {/* <NewPolishForm /> */}
             {this.props.polishes.map(polish => <div><Polish 
             name={polish.name}
             img={polish.img}
             description={polish.description}
             handleFavorited={this.props.handleFavorited} />
             <button onClick={() => this.props.handleFavorited(polish)} name="favorite">Favorite</button>
             </div> )}
        </div>
        )
    }
}

export default PolishContainer

//onClick the selected nail polish should be added to the favorites array 
//on hover, the favorites tab should render to the screen 
