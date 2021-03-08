const express = require('express');
const mongoose = require('mongoose');
const app = express();
let port=process.env.PORT || 4000;
const ejs = require('ejs');
//mongoose
const url = 'mongodb+srv://sannihita:Ambiguity2017@clustern1.gi4dm.mongodb.net/newDB?retryWrites=true&w=majority';
//export mod
//var db = require('./data2');

app.set('view engine', 'ejs');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect(url);
const html_path = '/Users/sannihitayalamanchili/Desktop/WebstormProjects/n1projectnew/';

const dataSchema = new mongoose.Schema({
    id: String,
    name: String
})
const data2 = mongoose.model('data2', dataSchema);

// export mod
//module.exports= data2;
//api routes
app.get('/db',  (req, res) => {
    data2.find({}, function(err, r){
        if(err) throw err;
        res.render('index', {
            results : r
        })
    })
})


app.listen(port, ()=>{
    console.log('Example app is listening on port http://localhost:${port}')});

