import React from 'react';
import {Route, Switch, Link, withRouter} from 'react-router-dom'

import {Title, Nav, Button, Tabs} from 'reactbulma'

import PolishContainer from './Containers/PolishContainer'
import FavoritesContainer from './Containers/FavoritesContainter'
import NewPolishForm from './Components/NewPolishForm';
import PolishPicker from "./Components/PolishPicker"


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
    } else {
      let filteredPolishesArray = filteredPolishes.filter(polish => 
        event.target.value === polish.season)
        this.setState({
          filteredPolishes: filteredPolishesArray
        })
    }
 

  //   //filters initally but doesnt update filter
  //   //all doesnt work after changing it 
  // handleColorCategoryChange = (event) => {
  //   let filteredPolishes = [...this.state.filteredPolishes]
  //   if(event.target.value === 'All'){
  //     this.setState({
  //       filteredPolishes: [...this.state.filteredPolishes]
  //     })
  //   }else if (event.target.value === 'Greens'){
  //     let filteredPolishesArray = filteredPolishes.filter(polish => 
  //       polish.color_category === 'Greens')
  //     this.setState({
  //       filteredPolishes: filteredPolishesArray
  //     })
  //   }
    
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
    this.props.history.push('/home')
  }

  render(){
    return( <div>
    <Title>Polished</Title>
    <Tabs style={{margin: 10}}>
    <ul>
      <li>
       <Link to={'/home'}> Home </Link>
      </li>
      <li>
       <Link to={'/favorites'}> Favorites </Link>
      </li>
      <li>
       <Link to={'/new-polish'}> Add New Polish </Link>
      </li>
      <li>
       <Link to={'/polish-picker'}> Polish Picker </Link>
      </li>
    </ul>
    </Tabs>

    <Switch>
      <Route path="/home" render={(props)=> {
        return(<div>
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
      <Route path="/new-polish" render={(props) => {
        return(
          <NewPolishForm handleFormSubmit={this.handleFormSubmit} />
        )
      }} />
      <Route path="/polish-picker" render={(props)=> {
        return(
          <PolishPicker polishes={this.state.polishes}/>
        )
      }} />
    </Switch>
    </div>
 )}
}

export default withRouter(App);
