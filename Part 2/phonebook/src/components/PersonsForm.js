import React from 'react';

const PersonsForm = ({onSubmit, name, number, onChangeName, onChangeNumber}) =>{

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={name} onChange={onChangeName} />
            </div>
            <div>
                number: <input value={number} onChange={onChangeNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonsForm;