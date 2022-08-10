const mysql = require("mysql");
const express = require("express");
const exphbs =require("express-handlebars");
const bodyParser = require("body-parser");
const app=express();
const port=process.env.PORT || 2121;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('hbs', exphbs.engine({extname: ".hbs"}));
app.set("view engine",'hbs');
app.listen(port, () => console.log(`Listening on port ${port}`));


const routes=require('./router/allrouter');
app.use('/',routes);





