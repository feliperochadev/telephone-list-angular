var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var contacts = [
                 {id: "f28d0ca0-4f23-4430-8da5-38b94c58f7ee", serial: "37G=RER/AESGU W", name: "Pedro da SILVA Rocha", telephone: "99999-8888", date: new Date(), operator: {name: "O²", code: 1, category: "Cellphone", pricePerMinute: 0.15}},
                 {id: "b390acac-66c8-4a23-ad69-be95b9486eb0", serial: "FA ;Z/ EG_WY-;J", name: "Ana maria Cristina", telephone: "9999-1111", date: new Date(), operator: {name: "Telekom", code: 2, category: "Cellphone",  pricePerMinute: 0.12}},
                 {id: "24831dcb-bb59-4534-8c09-d49766c31a40", serial: "4L @C(;^9RGDU W", name: "JOÃO costa", telephone: "9999-2222", date: new Date(), operator: {name: "Vodafone", code: 3, category: "Commercial Phone", pricePerMinute: 0.18}}
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

app.get('/contacts/:id', function(req, res) {
  var contact = contacts.find(o => o.id === req.params.id);
  res.json(contact);
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