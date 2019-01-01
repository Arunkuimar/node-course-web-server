const express = require('express');
const hbs = require('hbs');
var app = express();

// app.get('/',(req,res)=>{
//     //res.send('<h1>hai</h1>');
//     // res.send({
//     //     name:'Arun',
//     //     emp_id:'1272'
//     // });
//     res.send('index.html')
// });

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
//     next();
// })
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        a:'hai dude'
    });
});
const port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.listen(port);