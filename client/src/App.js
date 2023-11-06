import React from 'react';

import AnimalsTable from "./layouts/animalsTable/AnimalsTable";

const App = () => {
    const animalsData = [
        {"id": 1, "name": "Fido", "type": "Dog", "birthDate": "2020-01-01", "commands": "Sit, Stay, Fetch"},
        {"id": 2, "name": "Fido", "type": "Dog", "birthDate": "2020-01-01", "commands": "Sit, Stay, Fetch"},
        {"id": 3, "name": "Fido", "type": "Dog", "birthDate": "2020-01-01", "commands": "Sit, Stay, Fetch"}
    ]

    return (
        <div className='container'>
            <h1 className='display-1'>Система учета для питомника</h1>

            <AnimalsTable data={animalsData}/>
        </div>
    );
}

export default App;
