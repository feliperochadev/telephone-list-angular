var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var contacts = [
                 {serial: "37G=RER/AESGU W", name: "Pedro", telephone: "99999-8888", date: new Date(), operator: {name: "O²", code: 1, category: "Cellphone"}},
                 {serial: "FA ;Z/ EG_WY-;J", name: "Ana", telephone: "9999-1111", date: new Date(), operator: {name: "Telekom", code: 2, category: "Cellphone"}},
                 {serial: "4L @C(;^9RGDU W", name: "João", telephone: "9999-2222", date: new Date(), operator: {name: "Vodafone", code: 3, category: "Commercial Phone"}}
             ];
var operators = [
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
  res.json(contacts);
});

app.post('/contacts', function(req, res) {
  contacts.push(req.body);
  res.status(201).send(contacts[contacts.length-1]);
});

app.delete('/contacts', function(req, res) {
  contacts = req.body.data
  res.status(200).send(contacts);
});

app.get('/operators', function(req, res) {
  res.json(operators);
});