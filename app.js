const http = require('http'); //libreria HTTP
const express = require('express'); //express
const app = express(); //genero la app
const servidor = http.createServer(app);
const puerto = 8080;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send(`Hola`);
});

app.get('/about', (req, res)=>{
    res.send(`Hola, en about`);
});

servidor.listen(puerto);
console.debug('Servidor activo');