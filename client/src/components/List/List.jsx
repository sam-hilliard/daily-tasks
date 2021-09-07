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
    const baseURL = '/api/goals/';

    useEffect(() => {
        axios.get(baseURL).then(res => {
            setGoals(res.data);
        });

        goals.forEach((goal) => {
            if (isPast(goal.date)) {
                const goalData = {
                    date: new Date().toString()
                }

                if (goal.isComplete) {
                    goalData['isComplete'] = false;
                } else {
                    goalData['streak'] = 0;
                }

                axios.patch(baseURL + goal._id, goalData);
            }
        });

    }, [goals]);

    function addGoal(goal) {
        axios.post(baseURL, goal).then(res => {
            setGoals([...goals, res.data]);
        });
    }

    function deleteGoal(id) {
        axios.delete(baseURL + id).then(() => {
            setGoals(goals.filter(goal => goal._id !== id));
        });
    }

    function isPast(date) {
        const curDate = new Date();
        const goalDate = new Date(date);
        
        if (goalDate.getDay() !== curDate.getDay()) {
            return true;
        }

        if (goalDate.getMonth() !== curDate.getMonth()) {
            return true;
        }

        if (goalDate.getFullYear !== curDate.getFullYear()) {
            return true;
        }

        return false;
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
                                    <ListItem id={goal._id} goalName={goal.name} streak={goal.streak} isComplete={goal.isComplete} onDelete={deleteGoal} />
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