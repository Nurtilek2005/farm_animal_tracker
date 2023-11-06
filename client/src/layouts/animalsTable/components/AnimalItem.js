import React from 'react';

const AnimalItem = (animal) => {
  return (
      <tr>
          <th scope="row">{animal.id}</th>
          <td>{animal.name}</td>
          <td>{animal.type}</td>
          <td>{animal.birthDate}</td>
          <td>{animal.commands}</td>
      </tr>
  );
}

export default AnimalItem;