const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
    morgan(function (tokens, req, res) {
        return [
            "[METHOD][" + tokens.method(req, res) + "]",
            "[URL][" + tokens.url(req, res) + "]",
            "[STATUS][" + tokens.status(req, res) + "]",
            "[CONTENT-LENGTH][" + tokens.res(req, res, 'content-length') + "]",
            "[TIME-RESPONSE][" + tokens['response-time'](req, res), 'ms'  + "]",
            "[BODY]" + JSON.stringify(req.body),
            "[PARAMS]" + JSON.stringify(req.params),
            "[QUERY]" + JSON.stringify(req.query)
          ].join(' - ');
    })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
// log  connection status
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// api routes
app.use('/api', require('./routes/api'));

// listen in port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT || 3000}`);
});