import React from 'react';
import { useState } from 'react';

// material ui
import { FormControlLabel, Checkbox } from '@material-ui/core';

function ListItem(props) {

    const [done, setDone] = useState(false);

    function handleChange() {
        setDone(!done);
    }

    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={done} onChange={handleChange} name="goal" />}
                label={props.goalName}
            />
        </div>
    );
}

export default ListItem;