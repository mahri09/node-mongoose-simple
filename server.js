const express = require('express')
const app = express()
const router = require("./router/user.router");

const bodyParser = require('body-parser');

app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use("/users", router);

app.get('/', (req, res) => res.json({"message": "Congratulations! you are working great!"}))


const port = 3002
app.listen(port, () => console.log(`Example app listening on ${port} port!`))