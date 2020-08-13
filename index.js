const express = require('express');
const app = express();
const server = require('http').createServer(app);

// include auth
const passport = require('passport');
const session = require('express-session');

const assetsDir = `${__dirname}/assets`;

server.listen(3000);

app.use(express.static(assetsDir));

app.get('/', (req, res) => {
  res.sendFile(`${assetsDir}/views/index.html`);
});
