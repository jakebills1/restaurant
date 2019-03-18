import React from 'react';
import { Form, Button, } from 'semantic-ui-react';
class AddItem extends React.Component {
  state = { name: "", price: undefined, description: ""}
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({ id: this.props.id, ...this.state, })
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ name: "", price: undefined, description: "" })
  }

  componentDidMount() {
    // test if props id exists
    if (this.props.id) {
      const { name, price, description, } = this.props;
      this.setState({ name: name, price: price, description: description})
    }
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