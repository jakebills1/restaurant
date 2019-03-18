import React from 'react';
import axios from 'axios';
import { Header, Button, Icon } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import AddItem from './AddItem';
export default class Menu extends React.Component {
  state = { items: [], showForm : false, };
  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
  
  toggleForm = () => {
    return this.setState({ showForm: !this.state.showForm, })
  }

  add = (item) => {
    axios.post(`/api/menus/${this.props.id}/items`, item)
      .then( res => {
        const { items, } = this.state;
        this.setState({ items: [res.data, ...items], showForm: false, })
      })
  }
  
  render() {
    const { name, } = this.props;
    return (
      <div>
        <Header as="h3">{name}</Header>
        { this.state.showForm ? 
        <AddItem add={this.add}/>
        : 
        (<ul>
          {this.state.items.map( item =>  <MenuItem key={item.id} {...item} /> )}
        </ul>)
        }
        <Button icon color="blue" size="tiny" onClick={this.toggleForm}>
          {this.state.showForm ? <Icon name="minus square" size="large" /> : <Icon name="add square" size="large" />}
        </Button>
      </div>

    )
  }
}