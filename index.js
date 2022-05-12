const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("It's running.")
})

app.get('/notes', (req, res) => {

    let list = [{id: 1, name: 'Vardım ki Yurdumda'}, {id: 2, name: 'Ben Feleği Gördüm'}, {id: 3, name: 'Benim Ağam'}]

    res.send(list)
})

app.listen(9090, () => {
    console.log('Server running at http://localhost:9090');
})