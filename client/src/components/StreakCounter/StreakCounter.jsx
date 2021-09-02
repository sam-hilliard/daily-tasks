import React from 'react';

// material ui
import FastForwardIcon from '@material-ui/icons/FastForward';
import Typography from '@material-ui/core/Typography';
import './StreakCounter.css';


function StreakCounter(props) {

    return(
        <div className="streak-counter">
            <FastForwardIcon />
            <Typography>{props.streakCount}</Typography>
        </div>
    );
}

export default StreakCounter;