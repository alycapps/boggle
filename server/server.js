// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require("express");
const app = express();
const mysql = require('mysql');
const PORT = process.env.PORT || 3001;
// const routes = require("./routes");

// app.use(function(req, res, next) {
// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// next();
// });

app.set('port', process.env.PORT || 3001);

// Express only serves static assets in production
console.log('NODE_ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
app.use(express.static('client/build'));

// Return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
});
}

// config db ====================================
const connection = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPass,
  port: '3306',
  database: process.env.dbName
});

// connect to db 
connection.connect(function(err) {
	if (err) {
		return console.error('error: ' + err.message);
	}
	console.log('Connected to the MySQL server.');
});

// Add routes, both API and view
// app.use(routes);

// Error handler
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// Starting Server
app.listen(PORT, '0.0.0.0', (err) => {
	if (err) {
		return console.error('error: ' + err.message);
	}
	console.log(`API Server now listening on PORT ${PORT}!`);
});