const express = require('express');
const app = express();
const mysql=require('mysql2');
const path=require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public'))); 
app.use(express.static(path.join(__dirname, '/public/CSS'))); 


// app.use('/Images', express.static(path.join(__dirname, '/Images')));

const port=3000;

const connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'formdata',
    password:'123456'
  });

  connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the database');
});
app.get("/login",(req,res)=>{
   res.render("log.ejs")
});

app.post('/login', (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    const sql="insert into LoginInfo (username,password) values (?,?)";
    let val=[username,
             password
            ];
    try{
        connection.query(sql,val,(err,result)=>{
          if(err) throw err;
          console.log(result);
        })
      }catch(err){
          console.log(err);
      };
      res.render("FirstPage.ejs");
});

app.get("/signup",(req,res)=>{
  res.render("signup.ejs");
});

app.post('/signup',(req,res)=>{
  console.log(req.body);
    let {username, password,email} = req.body;
    
    const sql="insert into signupInfo (username,password,email) values (?,?,?)";
    let val=[username,
             password,
             email
            ];
    try{
        connection.query(sql,val,(err,result)=>{
          if(err) throw err;
          console.log(result);
        })
      }catch(err){
          console.log(err);
      };
  res.render("FirstPage.ejs");
});

app.get("/",(req,res)=>{
  res.render("FirstPage.ejs");
});



app.get("/menu",(req,res)=>{
  res.render("menu.ejs");
});

app.get("/about",(req,res)=>{
  res.render("about.ejs");
});

app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
});

app.post("/contact",(req,res)=>{
  console.log(req.body);
    let {name,email,message} = req.body;
    
    const sql="insert into contactInfo (name,email,message) values (?,?,?)";
    let val=[name,
             email,
             message
            ];
    try{
        connection.query(sql,val,(err,result)=>{
          if(err) throw err;
          console.log(result);
        })
      }catch(err){
          console.log(err);
      };
  res.render("FirstPage.ejs");

})

app.get("*",(req,res)=>{
  res.send("This page does not exist");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});






