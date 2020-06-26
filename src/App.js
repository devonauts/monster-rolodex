import React, {Component} from 'react';
import './App.css';

import Cardlist from './Components/card-list/card-list.component';

class App extends Component {
constructor () {
    super ();

    this.state = {

      monsters: [],
      //we need to store string from search to find card
      searchField:''
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
  // we destructured the state and got 2 constants that will be used to filter what the person typed in the searchfield. 
  const { monsters, searchField } = this.state; 
  // we created a new constant that will filter the arrays
  const filteredMonsters = monsters.filter(monster => 
    // when using the .include method, we compare whats inside the parenthesis with the previous statement. In this case, we compare the name of the monster transformed to lowercase with the searchfield input converted in lowercase, then that will be rendered.
    monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

  return (

        <div className="App">
        <input type='search' placeholder='Search Monsters' onChange={event => this.setState({searchField: event.target.value})}/>

        <Cardlist monsters= {filteredMonsters}/>
        </div>
  )
}
}

export default App;
