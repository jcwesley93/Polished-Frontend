import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'

import PolishContainer from './Containers/PolishContainer'
import FavoritesContainer from './Containers/FavoritesContainter'
import NewPolishForm from './Components/NewPolishForm';


class App extends React.Component {

  state ={
    polishes: [], 
    filteredPolishes: [], 
    favoritePolishes: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/api/v1/polishes')
    .then(res => res.json())
    .then(allPolishes => {
      this.setState({
        polishes: allPolishes, 
        filteredPolishes: allPolishes, 
      })
    })
  }

  handleSeasonChange = (event) => {
    let filteredPolishes = [...this.state.polishes]
    if(event.target.value === 'all'){
        this.setState({
            filteredPolishes: [...this.state.polishes]
        })
    } else if (event.target.value === 'summer'){
        let filteredPolishesArray = filteredPolishes.filter(polish =>
            polish.season === 'summer')
        this.setState({
            filteredPolishes: filteredPolishesArray
         })
    } else if (event.target.value === 'fall'){
        let filteredPolishesArray = filteredPolishes.filter(polish =>
            polish.season === 'fall')
        this.setState({
            filteredPolishes: filteredPolishesArray
         })
    } else if (event.target.value === 'winter'){
        let filteredPolishesArray = filteredPolishes.filter(polish =>
            polish.season === 'winter')
        this.setState({
            filteredPolishes: filteredPolishesArray
         })
    }else if(event.target.value === 'spring'){
        let filteredPolishesArray = filteredPolishes.filter(polish =>
            polish.season === 'spring')
        this.setState({
            filteredPolishes: filteredPolishesArray
         })
        }
    }

    //filters initally but doesnt update filter
    //all doesnt work after changing it 
  handleColorCategoryChange = (event) => {
    let filteredPolishes = [...this.state.filteredPolishes]
    if(event.target.value === 'All'){
      this.setState({
        filteredPolishes: [...this.state.filteredPolishes]
      })
    }else if (event.target.value === 'Greens'){
      let filteredPolishesArray = filteredPolishes.filter(polish => 
        polish.color_category === 'Greens')
      this.setState({
        filteredPolishes: filteredPolishesArray
      })
    }
    
}

  handleFavorited = (selectedPolish) => {
    this.setState({
      favoritePolishes: [...this.state.favoritePolishes, selectedPolish]
    })
  }

  handleUnfavorited =(selectedPolish) => {
    //take the current state of Favorite Polishes 
    //filter through, and select all of those that are not the selected polish 
    let newFavorite = this.state.favoritePolishes.filter(polish => {
      return polish !== selectedPolish
    })
    this.setState({
      favoritePolishes: newFavorite
    })
  }

  handleFormSubmit = (event, newPolish) => {
    event.preventDefault()
    this.setState({
      filteredPolishes: [...this.state.polishes, newPolish]
    })
  }

  render(){
    return( <div>
    <Switch>
    {/* <h1> Polished </h1> */}
    <Route path="/home" render={(props)=> {
      return(<div>
        <NewPolishForm handleFormSubmit={this.handleFormSubmit} />
      <Link to={'/favorites'}>FAVORITES </Link>
    <PolishContainer polishes={this.state.filteredPolishes} 
    handleSeasonChange={this.handleSeasonChange}
    handleColorChange={this.handleColorCategoryChange}
    handleFavorited={this.handleFavorited}/>
      </div>)
    }} />
    <Route path="/favorites" render={(props) => {
      return(
        <FavoritesContainer polishes={this.state.favoritePolishes}
    handleUnfavorited={this.handleUnfavorited}/>
      )
    }} />
    </Switch>
    </div>
 )}
}

export default App;
