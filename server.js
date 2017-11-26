const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const UserController = require('./controllers/UserController.js');

app.use(bodyParser.json());
app.use(express.static('./bundle'));

app.post('/register', UserController.add);
app.post('/login', UserController.verify);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log(`Login with react application is listening on ${PORT}`);
});
