require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001 || process.env.PORT;

// mongodb connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to database!'));

app.use(express.json());

const goalsRouter = require('./routes/goals');
app.use('/api/goals', goalsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});