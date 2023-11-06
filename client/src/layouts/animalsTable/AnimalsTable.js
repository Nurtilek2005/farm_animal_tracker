import React from 'react';
import AnimalItem from "./components/AnimalItem";

const AnimalsTable = (props) => {
    return (
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Type</th>
                <th scope='col'>BirthDate</th>
                <th scope='col'>Commands</th>
            </tr>
            </thead>

            <tbody className="table-group-divider">
            {
                props.data.map(animalData => (
                    <AnimalItem
                        key={animalData.id}
                        animal={animalData}
                    />
                ))
            }
            </tbody>
        </table>
    );
}

export default AnimalsTable;