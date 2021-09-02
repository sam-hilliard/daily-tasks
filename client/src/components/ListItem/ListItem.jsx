import React from 'react';
import { useState, useEffect } from 'react';
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

const GreyCheckbox = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function ListItem(props) {

    const [checked, setChecked] = useState(props.isComplete);
    const [streak, setStreak] = useState(props.streak);

    useEffect(() => {
        axios.patch(`/api/goals/${props.id}`, { 
            isComplete: checked
        });

        axios.patch(`/api/goals/${props.id}`, { 
            streak: streak
        });

    }, [checked, props.id, streak]);

    function handleChange(event) {
        const isChecked = event.target.checked;
        setChecked(isChecked);

        if (isChecked) {
            setStreak(streak + 1);
        } else {
            setStreak(streak - 1);
        }
    }

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className={checked ? "item-body complete" : "item-body"}>
            <GreyCheckbox onChange={handleChange} name="goal" />
            <Typography>
                {props.goalName}
            </Typography>
            <StreakCounter streakCount={streak}/>
            <IconButton aria-label="delete" onClick={handleClick}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default ListItem;