import React from 'react';
import { Form, Button, } from 'semantic-ui-react';
class AddItem extends React.Component {
  state = { name: "", price: undefined, description: ""}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state)
    this.setState({ name: "", price: undefined, description: "" })
  }
  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        name="name"
        label="Name"
        placeholder="Name"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
        <Form.Input
        name="price"
        label="Price"
        placeholder="Price"
        required
        value={this.state.price}
        onChange={this.handleChange}
        />
        <Form.Input
        name="description"
        label="Description"
        placeholder="Description"
        required
        value={this.state.description}
        onChange={this.handleChange}
        />
        <Button>Add Item</Button>
      </Form>
    )
  }
}
export default AddItem;