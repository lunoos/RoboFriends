import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import '../styleComponets/App.css';
import Scroll from './Scroll';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>  response.json())
    .then(users => this.setState({ robots: users}))
  }
  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
  }
  render(){
    const filterRobo = this.state.robots.filter(robo => {
      return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
      return(
      <div className = "tc">
       <h1 className="f1">Robo Friends</h1>
       <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
        <Cardlist robots ={filterRobo}/>
       </Scroll>
      </div>
    );
  }
  }
  
}

export default App;