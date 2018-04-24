const express = require('express');
const getCSV = require('get-csv');
const app = express();

const port = process.env.PORT || 5000;

app.get('/schedules/departures', (req, res) => {
	getCSV('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
  	.then(rows =>  res.send({"departures" : JSON.stringify(rows)}));
});

app.listen(port, () => console.log(`Listening on port ${port}`));