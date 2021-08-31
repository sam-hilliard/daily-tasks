import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// material ui
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

// custom components
import StreakCounter from '../StreakCounter/StreakCounter';

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

    const [done, setDone] = useState(props.isComplete);

    function handleChange(event) {
        axios.patch(`/api/goals/${props.id}`, { isComplete: event.target.checked, dateCompleted: Date.now()})
            .then((res) => {
                setDone(res.data.isComplete);
        });
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
            <StreakCounter />
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default ListItem;