import React from 'react';
import { useState } from 'react';

// material ui
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ListItem(props) {

    const [done, setDone] = useState(false);

    function handleChange() {
        setDone(!done);
    }

    function handleClick() {
        props.onDelete(props.goalId);
    }

    return (
        <Card>
            <CardContent>
                <FormControlLabel
                    control={<Checkbox checked={done} onChange={handleChange} name="goal" />}
                    label={props.goalName}
                />
                <IconButton aria-label="delete" onClick={handleClick}>
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default ListItem;