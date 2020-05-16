const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

const bodyParser = require('body-parser');
// connect to database
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true },()=>{
    console.log('connected to db')
});

var cors = require('cors');

app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));





const routes = require('./routers/route');
app.use('/',routes);

// mongoose.connection.on('error', err => {
//     logError(err);
//   });

app.listen(3000,()=>{console.log('Server started!')});