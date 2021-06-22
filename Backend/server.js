require('dotenv').config()
var express = require("express");
var cors = require("cors");
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose')

/* ====== DataBaseConnection ===== */

mongoose.connect(
    process.env.MONGO_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`MongoDb connected `)
  );

/* ====== MiddelWare ===== */
var app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ====== Routes ===== */

app.use("/api/users", require("./routes/users"));
app.use("/api/Image", require("./routes/images"));




app.listen(PORT , ()=> console.log(`server running in ${PORT}`))

module.exports = app;