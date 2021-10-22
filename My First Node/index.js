const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id: 0, name: 'Alan Walker', email: 'walker@gmail.com', phone: 'Walker' },
    { id: 1, name: 'Eilis Bilis', email: 'bilis@gmail.com', phone: 'bilis' },
    { id: 2, name: 'jasic', email: 'jasic@gmail.com', phone: 'jasic' },
    { id: 3, name: 'alex jackson', email: 'jackson@gmail.com', phone: 'jackson' },
    { id: 4, name: 'white hat', email: 'white@gmail.com', phone: 'white' },
    { id: 5, name: 'black', email: 'black@gmail.com', phone: 'black' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})