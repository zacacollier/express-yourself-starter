//node dependencies
const express = require('express');
const path = require('path');

//npm dependencies
const ejs = require('ejs');

//App initialization
const app = express();

//Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Add a route that renders the index view
app.get('/', (req, res, next) => {
  res.render('index.ejs', { header: '<h1>Header</h1>',
                            subheader: '<h2>Subheader</h2>',
                            liheader: '<h3>List Header</h3>',
                            list: [
                              '<ul>',
                              'List Item',
                              'List Item',
                              'List Item',
                              'List Item',
                              '</ul>'
                            ],
                            copy: '<p>Lorem ipsum castrati ergo sum</p>'
                            });
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './views/index'))
})

//Server and listening port
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
