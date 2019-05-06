import React from 'react';
import PolishContainer from './Containers/PolishContainer'
import FavoritesContainer from './Containers/FavoritesContainter'


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

  handleFavorited = (selectedPolish) => {
    this.setState({
      favoritePolishes: [...this.state.favoritePolishes, selectedPolish]
    })
    console.log(this.state.favoritePolishes)
  }

  handleUnfavorited =(selectedPolish) => {
    console.log(selectedPolish)
  }

  render(){
    return( <div>
    <h1> Polished </h1> 
    <FavoritesContainer polishes={this.state.favoritePolishes}
    handleUnfavorited={this.handleUnfavorited}/>
    <PolishContainer polishes={this.state.filteredPolishes} 
    handleSeasonChange={this.handleSeasonChange}
    handleFavorited={this.handleFavorited}/>
    </div>
 )}
}

export default App;
