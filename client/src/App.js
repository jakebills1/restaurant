import React, { Component } from 'react';
import { Container, Header, Button, Icon, } from 'semantic-ui-react';
import MenuList from './components/MenuList';
import AddMenu from './components/AddMenu'
import axios from 'axios';

class App extends Component {
  state = {menus: [], showForm: false}
  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, })
      })
      .catch( err => {
        console.log(err)
      })
  }
  add = (menu) => {
    const { menus, } = this.state;
    axios.post("/api/menus", menu)
      .then( res => {
        this.setState({ menus: [res.data, ...menus]})
      })
  }
  toggleForm = () => this.setState({ showForm: !this.state.showForm, })
  render() {
    return (
     <Container>
       <Header as="h1" style={{textAlign: "center", }}>Diner on Rails</Header>
       <MenuList menus={this.state.menus}/>
       <div style={{textAlign: "center"}}>
        <Button icon color="blue" onClick={this.toggleForm}>
          {this.state.showForm ? <Icon name="minus square" size="large" /> : <Icon name="add square" size="large" />}
        </Button>
       </div>
       {this.state.showForm ? <AddMenu add={this.add}/> : null}
     </Container>
    );
  }
}

export default App;

