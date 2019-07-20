

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    const heroRoutes = require('./Routes/heroes.route');
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/heroes', heroRoutes);
    const port = 8080;
    
    app.use(function (req, res, next) {
        //Enabling CORS
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
        next();
       });
       
       app.post('/update',  function (req, res,next) {
        res.send(req.body.name);
        
    });
    app.get('/get',  function (req, res,next) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ name: "Hello",ID:7 }));
        
    });
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))