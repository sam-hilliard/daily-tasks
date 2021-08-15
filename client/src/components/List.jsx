import React from 'react';
import { useState } from 'react';

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ListItem from './ListItem';
import AddItem from './AddItem';

function List() {

    const [items, setItems] = useState([]);

    function addItem(item) {
        setItems([...items, item]);
    }

    return(
        <Card variant="outlined">
            <CardContent>
             <Typography variant="h4" gutterBottom>
                Goals
            </Typography>
            <ListItem goalName="Awesome task"/>

            {items.map((item) => {
                return <ListItem goalName={item} />
            })}

            <AddItem onAdd={addItem}/>
            </CardContent>
        </Card>
    );
}

export default List;