import React from 'react';
import { useState } from 'react';

// material ui
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

// styles
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import './ListItem.css';

const GreyChecbox = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function ListItem(props) {

    const [done, setDone] = useState(false);

    function handleChange(event) {
        setDone(event.target.checked);
    }

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className={!done ? "item-body" : "item-body complete"}>
            <GreyChecbox checked={done} onChange={handleChange} name="goal" />
            <Typography>
                {props.goalName}
            </Typography>
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default ListItem;