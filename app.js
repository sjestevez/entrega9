const http = require('http'); //libreria HTTP para crear el servidor
const express = require('express'); //express
var cors = require('cors');
const app = express(); //genero la app
var bodyParser = require('body-parser'); //body-parser para leer data de POST
var fs = require('fs'); //filesystem para poder acceder/crear/modificar/borrar archivos

//const que apuntan a los archivos
const cart_654 = require("./api/cart/654.json");
const cart_987 = require("./api/cart/987.json");
const cart_buy = require("./api/cart/buy.json");

const category_1234 = require("./api/category/1234.json");
const category_all = require("./api/category/all.json");

const product_5678 = require("./api/product/5678.json");
const product_5678_comments = require("./api/product/5678-comments.json");
const product_all = require("./api/product/all.json");
const product_publish = require("./api/product/publish.json");



app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/api"));
app.use(cors());

const servidor = http.createServer(app);
const puerto = 8080;

app.get('/cart/654', (req, res)=>{
    res.json(cart_654);
});

app.get('/cart/987', (req, res)=>{
    res.json(cart_987);
});

app.get('/cart/buy', (req, res)=>{
    res.json(cart_buy);
});

app.get('/category/1234', (req, res)=>{
    res.json(category_1234);
});

app.get('/category/all', (req, res)=>{
    res.json(category_all);
});

app.get('/category/all', (req, res)=>{
    res.json(category_all);
});

app.get('/product/5678', (req, res)=>{
    res.json(product_5678);
});

app.get('/product/5678-comments', (req, res)=>{
    res.json(product_5678_comments);
});

app.get('/product/all', (req, res)=>{
    res.json(product_all);
});

app.get('/product/publish', (req, res)=>{
    res.json(product_publish);
});

servidor.listen(puerto);
console.debug('Servidor activo');