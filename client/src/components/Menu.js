import React from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import MenuItem from './MenuItem';
export default class Menu extends React.Component {
  state = { items: [], };
  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
  render() {
    const { name, } = this.props;
    return (
      <div>
        <Header as="h3">{name}</Header>
        <ul>
          {this.state.items.map( item =>  <MenuItem key={item.id} {...item} /> )}
        </ul>
      </div>

    )
  }
}