const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql');
const jsonParser = bodyParser.json();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'kenshin'

});
// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// static built-in middleware
app.use(express.static('public'))
// GET /insert
app.post('/insert', jsonParser,(req, res) => {
  let data = req.body
  let lineid = data.lineid
  let line1 = data.name
  let line2 = data.birth[0] + data.birth[1].toString().padStart( 2, '0') + data.birth[2].toString().padStart( 2, '0') 
  let line3 = data.taiju
  let line4 = data.weight
  let line5 = data.hukui
  let line6 = data.genryo-a
  let line7 = data.genryo-b
  let line8 = data.genryo-c
  let line9 = data.genryo-d
  let line10 = data.gutaiteki
  let line11 = data.smoke
  let line12 = data.Hblood
  let line13 = data.Lblood
  let line14 = data.bikou
  let linearr = [lineid,line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14]
  const sql = 'INSERT INTO line_table values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  connection.query(sql,linearr,function(err, result, fields){
		if (err) throw err;
    console.log('--- POST() /insert called ---')
		console.log(result);
		res.send('登録が完了しました');
	});
  
});
liff
  .getProfile()
  .then((profile) => {
    const name = profile.displayName;
  })
  .catch((err) => {
    console.log("error", err);
  });



// Start Listenings
app.listen(3000, () => console.log('Listening on http://localhost:3000/...'))