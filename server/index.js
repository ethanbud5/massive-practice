require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = 3005;
const {addDog,getDogs,deleteDog} = require("./controllers/dogCtrl")

var app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    // console.log(dbInstance);
    app.set("db",dbInstance);
    // dbInstance.create_dog_table().then(response=>{
    //     console.log(response)
    // }).catch(e=>console.log(e))
}).catch(err=> console.log(err));

app.use(bodyParser.json());



app.get("/api/test",(req,res)=>{
    res.status(200).json("It works!")
})
app.post("/api/dog",addDog)

app.get("/api/dogs",getDogs)

app.delete("/api/dog/:id",deleteDog);

app.listen(port,()=>{
    console.log("Listening!")
})