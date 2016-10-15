//node dependencies
const express = require('express');
const path = require('path');

//npm dependencies
const ejs = require('ejs');
const ghAvatar = require('gh-avatar');

//App initialization
const app = express();

//Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const image = ghAvatar('zacacollier')
  .then(avatar => console.log(avatar))
 .catch(reason => console.log(`promise rejected: ${reason}`))
;
console.log(image);


//Add a route that renders the index view
app.get('/', (req, res, next) => {
  res.render('index.ejs', { header: '<h1>Header</h1>',
                            subheader: '<h2>Subheader</h2>',
                            liheader: '<h3>List Header</h3>',
                            listItems: [
                              'List Item',
                              'List Item',
                              'List Item',
                              'List Item',
                            ],
                            copy: '<p>Lorem ipsum castrati ergo sum</p>',
                            avatar: image,
                            });
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './views/index'))
})

//Server and listening port
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
