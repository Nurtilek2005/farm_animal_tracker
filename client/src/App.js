import React from 'react';

import './App.css';

import AnimalsTable from "./layouts/animalsTable/AnimalsTable";

const App = () => {
    return (
        <div className='container'>
            <h1 className='display-1'>Система учета для питомника</h1>

            <AnimalsTable/>
        </div>
    );
}

export default App;
