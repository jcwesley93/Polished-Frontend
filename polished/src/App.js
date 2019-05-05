import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import PolishContainer from './Containers/PolishContainer';


class App extends React.Component {

  // state ={
  //   polishes: []
  // }

  // componentDidMount(){
  //   fetch('http://localhost:3005/api/v1/polishes')
  //   .then(res => res.json())
  //   .then(allPolishes => {
  //     this.setState({
  //       polishes: allPolishes
  //     })
  //   })
  // }
  render(){
    return( <div>
    <h1> Polished </h1>
    <PolishContainer />
    </div>
 )}
}

export default App;
