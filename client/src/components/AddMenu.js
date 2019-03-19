import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
class AddMenu extends React.Component {
  state = { name: ""}
  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", })
  }
  render() {
    return (
      <div>
        <Header as="h2">Add a menu:</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
          name="name"
          label="Name of Menu"
          placeholder="Add a Menu"
          required
          value={this.state.value}
          onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </Form>
      </div>

    )
  }
}
export default AddMenu;