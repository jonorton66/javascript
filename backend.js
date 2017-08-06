
const express = require('express');
const pg = require('pg');

const sqlconfig = {
  user: 'postgres',
  password: 'Ahmaoh3e',
  host: '192.168.0.200',
  database: 'postgres'
};

const Pool = new pg.Pool(sqlconfig);

let app = express();

function handlemult(req, res){
  console.log(req.body);
  let data = JSON.parse(req.body);
  console.log(data);
  res.send('Hey Joe').end();
}

app.post('/api/mult', handlemult);




//TODO: add portnumber
app.listen(8080)
