const express = require('express');
const app = express();
const port = 3001 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hey sexy!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});