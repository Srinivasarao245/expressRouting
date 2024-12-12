var express =require('express');
var app = express();
var movies = require('./Movies');
app.set('view engine','pug')
// Router
app.get("/",(req,res)=>{
    // res.render("home",{fname:'Rushikesh'})})
    // res.render("home",{students:["Rushikesh","Farooq","Srinivas","Karthik"]})
    res.render("home",{movies:movies})
    });

app.listen(4100);