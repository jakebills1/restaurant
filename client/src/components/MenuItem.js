import React from 'react';
const MenuItem = ({ name, price, description}) => (
  <li>{`${name} - $${price.toFixed(2)} - ${description}`}</li>
)
export default MenuItem;