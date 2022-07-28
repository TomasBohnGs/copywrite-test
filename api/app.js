const dotenv = require("dotenv")
const express = require('express');
const routes = require('./routes/index.js');

dotenv.config();
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
server.set('port', process.env.PORT || 3001);

server.listen(server.get('port'), () => {
    console.log('Server listening on port', server.get('port'));
})