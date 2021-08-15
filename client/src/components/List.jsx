import React from 'react';
import { useState } from 'react';

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ListItem from './ListItem';
import AddItem from './AddItem';

function List() {

    const [goals, setGoals] = useState([]);

    function addGoal(goal) {
        setGoals([...goals, goal]);
    }

    function deleteGoal(id) {
        setGoals(
            goals.filter((goal) => {
                return goal.id !== id;
            })
        );
    }

    return(
        <Card variant="outlined">
            <CardContent>
             <Typography variant="h4" gutterBottom>
                Goals
            </Typography>

            {goals.map((goal) => {
                return <ListItem key={goal.id} goalId={goal.id} goalName={goal.name} onDelete={deleteGoal} />;
            })}

            <AddItem onAdd={addGoal}/>
            </CardContent>
        </Card>
    );
}

export default List;