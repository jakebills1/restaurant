import React, { Component } from 'react';
import { Container, Header, } from 'semantic-ui-react';
import MenuList from './components/MenuList';
import axios from 'axios';

class App extends Component {
  state = {menus: [],}
  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, })
      })
      .catch( err => {
        console.log(err)
      })
  }
  render() {
    return (
     <Container>
       <Header as="h1" style={{textAlign: "center", }}>Diner on Rails</Header>
       <MenuList menus={this.state.menus}/>
     </Container>
    );
  }
}

export default App;
