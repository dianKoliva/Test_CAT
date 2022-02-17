const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const morgan =require( "morgan")
const cors =require('cors');






app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());



app.listen(port, () => {
 console.log(`Running on port: ${port}`)
})

