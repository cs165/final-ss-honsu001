const express = require('express');
const bodyParser = require('body-parser');
const googleSheets = require('gsa-sheets');

const key = require('./privateSettings.json');

const SPREADSHEET_ID = '1UuOpOzFY9PTPQePQrY3maq7xcaTDZRzKJjANcC4gHd0';
const sheet = googleSheets(key.client_email, key.private_key, SPREADSHEET_ID);

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

// TODO(you): Add at least 1 GET route and 1 POST route.

// Please don't change this; this is needed to deploy on Heroku.

async function onGet(req, res) {
	const result = await sheet.getRows();
	const rows = result.rows;
	if(rows.length > 1){
		res.json(rows[1][0]);
	}
	else{
		res.json("type here:");
	}
}
app.get('/api', onGet);

async function onPost(req, res) {
	const messageBody = req.body;
	const result = await sheet.getRows();
	const rows = result.rows;
	let newtext = [];
	
	newtext.push(messageBody["text"]);
	
	console.log(newtext);
	await sheet.setRow(1, newtext);
	
	res.json('success');
}
app.post('/api', jsonParser, onPost);


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!!!!!!`);
});
