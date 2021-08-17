import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// material ui
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

function AddItem(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputText) {
            const goal = {
                id: uuidv4(),
                name: inputText
            }
            
            props.onAdd(goal);
        }
        setInputText('');
    }

    return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off" action={void(0)}>
        <TextField onChange={handleChange} value={inputText} label="New Item" />
        <Fab onClick={handleSubmit} color="secondary" aria-label="add">
            <AddIcon />
        </Fab>   
    </form>
    );
}

export default AddItem;