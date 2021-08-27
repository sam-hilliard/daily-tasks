const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001 || process.env.PORT;

mongoose.connect('mongodb://localhost:27017/daily_goals', { useNewUrlParser: true }).
  catch(error => handleError(error));

// my schema (will be put into separate files later)
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    name: String,
    isComplete: Boolean,
    streak: Number
});

const Goal = new mongoose.model('Goal', goalSchema);

// get all the goals from the database
app.get('/api/goals', (res, req) => {

});

// insert a goal
app.post('/api/add_goal', (res, req) => {

});

// delete a goal by id
app.post('/api/delete_goal' (res, req) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});