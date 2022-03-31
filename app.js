// const axios = require('axios').default;
// axios.post('/SaveData', urlencodedParser,(req,res,next)=>{
//     response ={
//         username : req.body.username,
//         password : req.body.password,
//         email : req.body.email
//     }
//     sequelize.sync().then(()=>{
//         signup.create(response);
//     })
// })
const dotenv = require('dotenv');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const express = require('express');
var sequelize = require('./controller/database.js');
var signup = require('./model/signup.js');
var axios = require('axios');
const app = express();
var bodyParser = require('body-parser');
const { use } = require('express/lib/application');
const cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // for some legacy browsers
  }
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',(req,res,next) =>{
    res.send('welcome to our APi Server');
    next();
})
app.post('/',(req,res,next)=>{
   console.log(req.headers);
   console.log(req.body);
    var data = req.body;    
    let {username,password,email} = req.body;
    sequelize.sync().then(()=>{
       signup.create({
           username : username,
           password : password,
           email : email
       })
        .then((data)=>{
            console.log(data);
            res.status(200).send("success");
        })
        .catch(function(err) {
            console.log('Error ' + err);
            res.send("error"+ err);
        })
    }).catch((err)=>{ 
        console.log(err);
    });
});

app.post('/login', (req,res,next)=>{
    var data = req.body;
    let {username,password} = JSON.parse(Object.keys(data))
    signup.findAll({where:{ username:username,password:password}}).then((response)=>{
        console.log('id', response[0].id);
        res.send('<h1>you successfully logged in into server.</h1>');
        //res.send(response.id);
    }).catch((error) =>{
        res.send('<h1>Please check again your login id and password. <a href="/login">Click to go again to login page.</a>')
    })
})
app.post('/Authlogin',(req,res,next)=>{
    var data = {};
    console.log(req.body.user);
    //data.token = req.body.credential.idToken;
    //console.log(data);
    //console.log(req.body.credential.idToken);
    res.send(req.body.user);
})

app.listen(PORT , ()=>{
    console.log(`Server Listening at http://${HOST}:${PORT}}`);
    dotenv.config();
});