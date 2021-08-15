import React from 'react';

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ListItem from './ListItem';

function List() {
    return(
        <Card variant="outlined">
            <CardContent>
             <Typography variant="h4" gutterBottom>
                Goals
            </Typography>
            <ListItem goalName="Awesome task"/>
            </CardContent>
        </Card>
    );
}

export default List;