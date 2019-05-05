import React from 'react'
import Polish from '../Components/Polish.js'
import PolishFilter from '../Components/PolishFilter'
import { filter } from 'rsvp';

class PolishContainer extends React.Component {

//take the state of all polishes and filter through them  based on what the selected value is. 
   state ={
    polishes: [],
    filteredPolishes: []
    }

    componentDidMount(){
        fetch('http://localhost:3005/api/v1/polishes')
        .then(res => res.json())
        .then(allPolishes => {
          this.setState({
            polishes: allPolishes, 
            filteredPolishes: allPolishes
          })
        })
      }

    //can this be a switch statement?  
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

    render(){
        return (<div>
        <PolishFilter handleCategoryChange={this.handleSeasonChange} />
             {this.state.filteredPolishes.map(polish => <div><Polish 
             name={polish.name}
             img={polish.img}
             description={polish.description} /></div> )}
        </div>
        )
    }
}

export default PolishContainer