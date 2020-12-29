const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const mongoose = require('mongoose');
const api = require("./routes/todoApi");
const app = express();

mongoose.connect('mongodb://localhost/tin', { useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false } );

// if(!database) {
//   console.log("Error Establishing a Database Connection")
// } else {
//   console.log("Successfully connected to Database")
// }
app.use('/', api);

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} (http://localhost:${PORT}/).`);
});