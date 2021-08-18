import React from 'react';
import { useState } from 'react';

// material ui
import FastForwardIcon from '@material-ui/icons/FastForward';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';


function StreakCounter() {

    const [days, setDays] = useState(0);

    return(
        <div>
            <FastForwardIcon />
            <Typography>{days}</Typography>
        </div>
    );
}

export default StreakCounter;