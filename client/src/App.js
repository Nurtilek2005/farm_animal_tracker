import React, {useState} from 'react';

import AnimalsTable from './layouts/animalsTable/AnimalsTable';

const App = () => {
    const [animalsData, setAnimalsData] = useState([
        {'id': 1, 'name': 'Fido', 'type': 'Dog', 'birthDate': '2020-01-01', 'commands': 'Sit, Stay, Fetch'},
        {'id': 2, 'name': 'Fido', 'type': 'Dog', 'birthDate': '2020-01-01', 'commands': 'Sit, Stay, Fetch'},
        {'id': 3, 'name': 'Fido', 'type': 'Dog', 'birthDate': '2020-01-01', 'commands': 'Sit, Stay, Fetch'}
    ]);

    const [selectedType, setSelectedType] = useState('pet');
    const animalTypes = {
        pet: ['Dog', 'Cat', 'Hamster'],
        pack: ['Horse', 'Camel', 'Donkey'],
    };

    const [formData, setFormData] = useState({
        name: '',
        type: 'Dog',
        birthDate: '',
        commands: [],
    });

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setFormData({
            ...formData,
            type: animalTypes[event.target.value][0],
        });
    };

    const handleAddAnimal = () => {
        const newAnimal = {
            id: animalsData.length + 1,
            name: formData.name,
            type: formData.type,
            birthDate: formData.birthDate,
            commands: formData.commands.join(', '),
        };

        setAnimalsData([...animalsData, newAnimal]);

        setFormData({
            name: '',
            type: animalTypes[selectedType][0],
            birthDate: '',
            commands: [],
        });
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCommandChange = (event) => {
        const {value} = event.target;
        const updatedCommands = [...formData.commands];

        if (event.target.checked) {
            updatedCommands.push(value);
        } else {
            const index = updatedCommands.indexOf(value);
            if (index !== -1) {
                updatedCommands.splice(index, 1);
            }
        }

        setFormData({
            ...formData,
            commands: updatedCommands,
        });
    };

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h1>Система учета для питомника</h1>
                </div>
                <div className='card-body'>
                    <AnimalsTable data={animalsData}/>

                    <div>
                        <div className='mb-3'>
                            <label htmlFor='exampleFormControlInput1' className='form-label'>Имя</label>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleFormControlInput1'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-6 col-sm-6">
                                <label htmlFor='animal-type' className='form-label'>Тип животного</label>
                                <select
                                    className='form-select'
                                    aria-label='Default select example'
                                    onChange={handleTypeChange}
                                    name='animalType'
                                >
                                    <option value='pet'>Домашнее животное</option>
                                    <option value='pack'>Вьючее животное</option>
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <label htmlFor='animal' className='form-label'>Животное</label>
                                <select
                                    className='form-select'
                                    aria-label='Default select example'
                                    name='type'
                                    value={formData.type}
                                    onChange={handleInputChange}
                                >
                                    {animalTypes[selectedType].map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleFormControlInput2' className='form-label'>Дата рождения</label>
                            <input
                                type='date'
                                className='form-control'
                                id='exampleFormControlInput2'
                                name='birthDate'
                                value={formData.birthDate}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Команды</label>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value='Sit'
                                    id='flexCheckDefault1'
                                    onChange={handleCommandChange}
                                />
                                <label className='form-check-label' htmlFor='flexCheckDefault1'>Sit</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value='Stay'
                                    id='flexCheckDefault2'
                                    onChange={handleCommandChange}
                                />
                                <label className='form-check-label' htmlFor='flexCheckDefault2'>Stay</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value='Fetch'
                                    id='flexCheckDefault3'
                                    onChange={handleCommandChange}
                                />
                                <label className='form-check-label' htmlFor='flexCheckDefault3'>Fetch</label>
                            </div>
                        </div>
                        <button type='button' className='btn btn-outline-light' onClick={handleAddAnimal}>
                            Добавить животное
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
