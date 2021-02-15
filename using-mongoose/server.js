
const express = require("express");
const { response } = require("express");
const { request } = require("http");
const mongoose = require('mongoose');
const { stringify } = require("querystring");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// configure db
const dbName = "cats";

mongoose 
    .connect("mongodb://localhost/" + dbName, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then (() => console.log('successfull connnected to db: ' + dbName))
    .catch((err)=> console.log('something is wrong when trying to connect with db:' + dbName));

const CatsSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    isFriendly: Boolean,
},
{
    timestamps: true, 
})

// need to install mongoose me thinks

const modelName = 'cat';
const cat = mongoose.model(modelName, CatsSchema)

app.get('/',(request, response) => {
    return response.send('hello, world');
});

app.get('/api/cats', (request,response) => {
    cats.find()
        .then.find((allCats) => response.json(allCats))
        .catch((err) => res.json(err));
})

// app.post

app.listen(8000, () => 
    console.log(' you have successfully connected to port 8000')
);
