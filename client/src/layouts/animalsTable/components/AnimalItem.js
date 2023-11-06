import React from 'react';

const AnimalItem = (props) => {
  return (
      <tr>
          <th scope="row">{props.animal.id}</th>
          <td>{props.animal.name}</td>
          <td>{props.animal.type}</td>
          <td>{props.animal.birthDate}</td>
          <td>{props.animal.commands}</td>
      </tr>
  );
}

export default AnimalItem;