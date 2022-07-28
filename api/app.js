const express = require('express');
const routes = require('./routes/index.js');

const server = express();

server.use( express.json({ limit: '50mb' }) );
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.use('/', routes);

server.listen(3001, () => {
    console.log(`%s listening at ${3001}`);
});