import React from 'react';
import { useState } from 'react';

// material ui
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

function AddItem(props) {
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function handleClick() {
        props.onAdd(inputText);
        setInputText('');
    }

    return (
    <form noValidate autoComplete="off">
        <TextField onChange={handleChange} value={inputText} label="New Item" />
        <IconButton aria-label="add">
            <AddCircleIcon onClick={handleClick}/>
        </IconButton>   
    </form>
    );
}

export default AddItem;