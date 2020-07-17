//npm i express
//npm i nodemon

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.get("/api/courses", (req, res) => {
    res.send([1,2,3,4]);
});

app.get("/api/courses:id", (req,res) => {
    res.send(req.params.id);
})

app.get("/api/courses/:id", (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT; // || 3000;

app.listen(port, () => {
    console.log('Listening from port 3000!');
});



/*
app.post();
app.put();
app.delete();
 */