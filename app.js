//node dependencies
const express = require('express');
const path = require('path');

//npm dependencies
const ejs = require('ejs');
const ghAvatar = require('gh-avatar');

//App initialization
const app = express();

//Set the views directory
app.use(express.static('css'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const image = ghAvatar('zacacollier')
  .then(avatar => avatar)
 .catch(reason => console.log(`promise rejected: ${reason}`))
;
console.log(image);

const avatarUrl = 'https://avatars.githubusercontent.com/u/18710669?v=3';
//Add a route that renders the index view
app.get('/', (req, res, next) => {
  res.render('index.ejs', { header: '<h1>Zac Collier</h1>',
                            subheader: '<h2>Full-Stack Developer-in-Training</h2>',
                            liheader: '<h3>Skills:</h3>',
                            listItems: [
                              'HTML / CSS',
                              'Bootstrap',
                              'Javascript ES6',
                              'jQuery',
                            ],
                            learnHeader: '<h3>Learning:</h3>',
                            learnItems: [
                              'Express',
                              'NodeJS',
                              'React',
                              'Redux',
                              'Python 2 & 3'
                            ],
                            hobbiesHeader: "<h3>When I'm not studying I am:</h3>",
                            hobbiesItems: [
                              'Swimming',
                              'Cooking',
                              'Recording with Ableton',
                              'Making patches with Reaktor'
                            ],
                            copy: '<p>Lorem ipsum castrati ergo sum</p>',
                            avatar: avatarUrl
                            });
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './views/index'))
})

//Server and listening port
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
