const express = require("express");
const app  = express();
const { readFile, writeFile } = require('fs').promises;
const bodyParser = require("body-parser");
var cors = require("cors");

//COnfigure body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
        res.send("www pog");
});
//Handle POST request from app and save, write to json file using request data
app.post('/save', async (req,res) => {
    //console.log(typeof JSON.stringify(req.body));
    try {
        //request comes in as json already, make to string and write
        var content = JSON.stringify(req.body);
        await writeFile('./files/file.json', content);
    } catch (err) {
        console.log(err);
    }
    res.send("saved");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));