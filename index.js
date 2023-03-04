const express = require('express');
const app = express();
const port = 3000;
const ejs = require('ejs');

app.set('view engine', 'ejs');



app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`app listening on port ${port}!`));