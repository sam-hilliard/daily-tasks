import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    const baseURL = '/api/goals';

    useEffect(() => {
        axios.get(baseURL).then(res => {
            setGoals(res.data);
        });
    }, []);

    function addGoal(goal) {
        axios.post(baseURL, goal).then(res => {
            setGoals([...goals, res.data]);
        });
    }

    function deleteGoal(id) {
        axios.delete(`${baseURL}/${id}`).then(() => {
            setGoals(goals.filter(goal => goal._id !== id));
        });
    }

    return(
        <StylesProvider injectFirst>
            <Card>
                <CardContent className="list-body">
                    
                    <Typography variant="h4" gutterBottom>
                        Goals
                    </Typography>

                    <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
                        {goals.map((goal) => {
                            return(
                                <Grid item key={goal._id}>
                                    <ListItem id={goal._id} goalName={goal.name} isComplete={goal.isComplete} onDelete={deleteGoal} />
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