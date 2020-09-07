const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


// Starting Server
app.listen(PORT, '0.0.0.0', (err) => {
	console.log(`API Server now listening on PORT ${PORT}!`);
	console.log(err);
});