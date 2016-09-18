var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());

var contatos = [
                 {name: "Pedro", telephone: "99999-8888", date: new Date(), operator: {name: "O²", code: 1, category: "Cellphone"}},
                 {name: "Ana", telephone: "9999-1111", date: new Date(), operator: {name: "Telekom", code: 2, category: "Cellphone"}},
                 {name: "João", telephone: "9999-2222", date: new Date(), operator: {name: "Vodafone", code: 3, category: "Commercial Phone"}}
             ];
var operadoras = [
                 {name: "O²", code: 1, category: "Cellphone", pricePerMinute: 0.15},
                 {name: "Telekom", code: 2, category: "Commercial Phone", pricePerMinute: 0.18},
                 {name: "Vodafone", code: 3, category: "CellPhone", pricePerMinute: 0.12}
             ];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contacts', function(req, res) {
  res.json(contatos);
});

app.post('/contacts', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operators', function(req, res) {
  res.json(operadoras);
});