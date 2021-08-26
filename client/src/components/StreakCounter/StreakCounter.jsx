import React from 'react';
import { useState } from 'react';

// material ui
import FastForwardIcon from '@material-ui/icons/FastForward';
import Typography from '@material-ui/core/Typography';
import './StreakCounter.css';


function StreakCounter() {

    const [days, setDays] = useState(0);

    return(
        <div className="streak-counter">
            <FastForwardIcon />
            <Typography>{days}</Typography>
        </div>
    );
}

export default StreakCounter;