import React from 'react';

// material ui
import { Card, CardContent, Typography } from '@material-ui/core';

import ListItem from './ListItem';

function List() {
    return(
        <Card variant="outlined">
            <CardContent>
             <Typography variant="h4" gutterBottom>
                Goals
            </Typography>
            <div>
                <ListItem goalName="Awesome task"/>
            </div>
            </CardContent>
        </Card>
    );
}

export default List;