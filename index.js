const express = require('express');
const app = express();
const server = require('http').createServer(app);

// include auth
const passport = require('passport');
const session = require('express-session');

server.listen(3000);
