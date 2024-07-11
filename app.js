const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});
app.get('/process', (req, res) => {
  var no1 = req.query.txt1;
  var no2 = req.query.txt2;
  var no3 = req.query.txt3;
  var no4 = req.query.txt4;
  var no5 = req.query.txt5;
  var d="";
  if(d<30)
  {
    d="style = 'border-color' : 'red' "
  }
  var total = parseInt(no1) + parseInt(no2) + parseInt(no3) + parseInt(no4) + parseInt(no5);
  var result = (total/500)*100;
  var message = `
    <h1>Result</h1>
    <table border="1">
      <tr>
        <th>Subject</th>
        <th>Marks</th>
      </tr>
      <tr>
        <td>Subject 1</td>
        <td>${no1}</td>
      </tr>
      <tr>
        <td>Subject 2</td>
        <td>${no2}</td>
      </tr>
      <tr>
        <td>Subject 3</td>
        <td>${no3}</td>
      </tr>
      <tr>
        <td>Subject 4</td>
        <td>${no4}</td>
      </tr>
      <tr>
        <td>Subject 5</td>
        <td>${no5}</td>
      </tr>
      <tr>
        <td>Total Marks</td>
        <td>${result+"%"}</td>
      </tr>
    </table>
  `;  
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
