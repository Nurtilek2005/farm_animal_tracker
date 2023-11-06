import React from 'react';
import AnimalItem from "./components/AnimalItem";

const animalsData = [
    {"id": 1, "name": "Fido", "type": "Dog", "birthDate": "2020-01-01", "commands": "Sit, Stay, Fetch"}
]

const AnimalsTable = () => {
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
                animalsData.map(animal => (
                    <AnimalItem
                        id={animal.id}
                        name={animal.name}
                        type={animal.type}
                        birthDate={animal.birthDate}
                        commands={animal.commands}
                    />
                ))
            }
            </tbody>
        </table>
    );
}

export default AnimalsTable;