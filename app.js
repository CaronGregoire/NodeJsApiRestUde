const express = require('express');
const req = require('express/lib/request');
const morgan = require('morgan');
const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Bob Doe',
    },
    {
        id: 3,
        name: 'Jack Doe',
    }
];

app.listen(8080, () => console.log('Server is running on port 8080'));

app.use(morgan('dev'));

app.get('/api/v1/members/:id', (req, res) => {
    res.send(members[(req.params.id)-1].name)
});

app.get('/api/v1/members', (req, res) => {
    if (req.query.max != undefined && req.query.max > 0) {
        res.send(members.slice(0, req.query.max))
    } else {
        res.send(members)
    }
});
