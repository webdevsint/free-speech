const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;
const routes = require("./routes/router.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/', routes)

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
