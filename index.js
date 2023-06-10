const express = require("express")
const cors = require("cors");
const app = express();
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const db = require("./models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

require("./routes/user")(app);

const PORT = process.env.PORT || 8004;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});