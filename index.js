const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json())

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(8084, () => {
    console.log("Listening on 8084")
})