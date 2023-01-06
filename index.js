const bodyParser = require("body-parser");
const express = require("express");
const studentData = require("./data");
const bycrpt = require("bcrypt")
const jwt = require("jsonwebtoken")

const app = express();
app.use(bodyParser.json())

app.get('/student',function(req,res){
    console.log("Hitting student page")
    const token = req.headers("authorization").split(" ")[1]
    const SECRET_KEY = "secretKey@123"; 
    const decoded = jwt.verify(token, SECRET_KEY)
    console.log("this is decoded",decoded)
    // const sid = req.query.id
    // const data = studentData(sid);
    res.send(decoded)
})

app.post('/student',function(req,res){
    console.log("Hitting post method page")
    const body = req.body;
    console.log("printing the body => ",body)
    res.send({"message":"Data is stored"})
})


// app.post('/register',function(req,res){
//       console.log("Regististering the user")
//       const userDetails = req.body
//       console.log("Received user details => ",userDetails)
//       const password = userDetails.password
//       const roundsOfSalt = 10;

//       bycrpt.genSalt(roundsOfSalt, function(err,salt){
//         if(err){
//             console.log(err)
//         }
//         console.log("Salt is generated =>",salt)
//         bycrpt.hash(password,salt,function(err,hashedPassword){
//           if(err){
//             console.log(err)
//           }
//           else{
//             console.log("Here is a hashed password =>",hashedPassword)
//             res.send({"Hashed Password" : hashedPassword})
//           }
//         })
//       })
// })

app.post('/register',function(req,res){
    console.log("Regististering the user");
    const userDetails = req.body;
    console.log("Received user details => ",userDetails);
    const password = userDetails.password;
    const roundsOfSalt = 10;
    bycrpt.hash(password,roundsOfSalt,function(err,hashedPassword){
        if(err){
          console.log(err)
        }
        else{
          console.log("Here is a hashed password =>",hashedPassword);
          bycrpt.compare(password, hashedPassword, function(err,result){
            if(err){
                console.log(err)
            }
            console.log("hashed password maches result =>",result)
            res.send({"Hashed Password" : hashedPassword});
          })
        }
      })
})


app.post('/login',function(req,res){
    console.log("User logging in");
    const loginData = req.body;
    console.log("Received login data =>",loginData);
    const SECRET_KEY = "secretKey@123"; //also called as public key
    const jwtToken = jwt.sign(loginData, SECRET_KEY)
    res.send({"token": jwtToken})
})


app.listen(5000,function(){
    console.log("Server is started at port 5000")
});