import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
const MenuItem = ({ name, price, description, id, deleteItem, }) => (
  <li>{`${name} - $${price.toFixed(2)} - ${description}`}
    <div style={{ marginLeft: "5px", display: "inline", }}>
      <Button icon color="red" size="tiny" onClick={() => deleteItem(id)}>
        <Icon name="delete" />
      </Button>
    </div>
  </li>

  
)
export default MenuItem;