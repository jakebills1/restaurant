import React from 'react';
import axios from 'axios';
import { Header, Button, Icon } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import AddItem from './AddItem';
export default class Menu extends React.Component {
  state = { items: [], showForm : false, editing: false, editingItem: undefined, };
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
    this.setState({ showForm: !this.state.showForm, })
  }

  add = (item) => {
    axios.post(`/api/menus/${this.props.id}/items`, item)
      .then( res => {
        const { items, } = this.state;
        this.setState({ items: [res.data, ...items], showForm: false, })
      })
  }

  deleteItem = (id) => {
    const items = this.state.items.filter( item => item.id !== id )
    this.setState({ items: items, })
  }

  toggleEdit = (id) => {
    this.setState({ editing: !this.state.editing, editingItem: this.state.items.filter( item => item.id === id ) })
  }

  edit = (editedItem) => {
    const items =  this.state.items.map( item => {
      if (item.id === editedItem.id)
        return editedItem
      return item
    })
    this.setState({ items, })
  }
  
  render() {
    const { name, } = this.props;
    return (
      <div>
        <Header as="h3">{name}</Header>
        {this.state.editing ? <AddItem {...this.state.editingItem[0]} edit={this.edit} toggleEdit={this.toggleEdit}/> 
        :
        this.state.showForm ? 
        <AddItem add={this.add}/>
        : 
        (<ul>
          {this.state.items.map( item =>  <MenuItem key={item.id} {...item} deleteItem={this.deleteItem} toggleEdit={this.toggleEdit}/> )}
        </ul>)
        }
         
        
        <Button icon color="blue" size="tiny" onClick={this.toggleForm}>
          {this.state.showForm ? <Icon name="minus square" size="large" /> : <Icon name="add square" size="large" />}
        </Button>
      </div>

    )
  }
}