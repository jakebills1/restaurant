import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const MenuItem = ({ name, price, description, id, deleteItem, toggleEdit }) => (
  <li>{`${name} - $${price.toFixed(2)} - ${description}`}
    <div style={{ marginLeft: "5px", display: "inline", }}>
      <Button icon color="red" size="tiny" onClick={() => deleteItem(id)}>
        <Icon name="delete" />
      </Button>
      <Button icon color="green" size="tiny" onClick={() => toggleEdit(id)}>
        <Icon name="edit" />
      </Button>
    </div>
  </li>

  
)
export default MenuItem;