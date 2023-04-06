const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("Listening on 3000")
})