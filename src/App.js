import React, {Component} from 'react';
import './App.css';

import Cardlist from './Components/card-list/card-list.component';

class App extends Component {
constructor () {
    super ();

    this.state = {

      monsters: []
    };
};
// this is a lifecycle that gets activated when React sends a component for the first time.
componentDidMount() {
  //this is a javascript method that allows to fetch data from any external server
  fetch ("https://jsonplaceholder.typicode.com/users")
  // after fetching the data we need to get it in an understandable language for the computer. meaning JSON format. We do that by using the .then method that comes from javascript. We set up response as the name for the item that we will get back and then transform it in a json format. 
  .then(response => response.json())
  // calling the then method, we populate the state with new information coming from the external source. We use the setState mehod and set monsters to equal the users json file. 
  .then(users => this.setState({monsters:users}));

}
render () {
  return (

        <div className="App">
        <Cardlist monsters= {this.state.monsters}/>
        </div>
  )
}
}

export default App;
