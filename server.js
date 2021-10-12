require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pg = require('./api/db/db.js');
const routes = require('./api/db/routes/routes.js');

pg.authenticate()
  .then(() => console.log('Connection success'))
  .catch((e) => console.log(e.message))

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Connected to port ${process.env.PORT || 3000}\nhttp://localhost:${process.env.PORT || 3000}`);
})
