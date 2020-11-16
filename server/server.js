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
const routes = require("./routes");
const passport = require('./passport');


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
 const connection;
// config db ====================================
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
	connection = mysql.createConnection({
		host: process.env.dbHost,
		user: process.env.dbUser,
		password: process.env.dbPass,
		//   port: '3306',
		database: process.env.dbName
	});
}

// connect to db 
connection.connect(function(err) {
	if (err) {
		return console.error('error: ' + err.message);
	}
	console.log('Connected to the MySQL server.');
});

connection.query('USE ' + process.env.dbName);	

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// If its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/'))
	});
}

// Add routes, both API and view
app.use(routes);

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