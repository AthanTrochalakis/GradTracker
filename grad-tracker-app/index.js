//All DB stuff is commented out until we have that part done 
const express = require('express');
const routes = require('./routes/main');
// const Database = require('./database/db')
const path = require('path');

const app = express();
const port = 3000;
// const db = new Database('grad-tracker.db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*************** Middleware *****************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// const attachDatabase = function (req, res, next) {
//     req.db = db;
//     next();
// }
// app.use(attachDatabase);

/*********** ROUTES ***************/
app.use('/', routes);

app.use((req, res) => {
    res.status(404).render('error');
});

//Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});