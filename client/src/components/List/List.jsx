import React from 'react';
import { useState } from 'react';

// material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ListItem from '../ListItem/ListItem';
import AddItem from '../AddItem/AddItem';

// styles
import { StylesProvider } from '@material-ui/core/styles';
import './List.css'

function List() {

    const [goals, setGoals] = useState([]);

    function getGoals() {
        
    }

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
        <StylesProvider injectFirst>
            <Card>
                <CardContent className="list-body">
                    
                    <Typography variant="h4" gutterBottom>
                        Goals
                    </Typography>

                    <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Grid item>
                            <ListItem id={-1} goalName="just a lil test" onDelete={deleteGoal} />
                        </Grid>
                        {goals.map((goal) => {
                            return(
                                <Grid item key={goal.id}>
                                    <ListItem id={goal.id} goalName={goal.name} onDelete={deleteGoal} />
                                </Grid>
                            );
                        })}
                    </Grid>

                    <AddItem onAdd={addGoal}/>

                </CardContent>
            </Card>
        </StylesProvider>
    );
}

export default List;