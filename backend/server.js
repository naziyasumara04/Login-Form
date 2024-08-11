const express = require('express');
const app = express();
const mysql=require('mysql2');
const path=require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

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
        process.exit(1); // Exit the process with an error code
    }
    console.log('Connected to the database');
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
    res.render("log.ejs",{username});
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
  res.render("signup.ejs");
});

// app.get("/signup",(req,res)=>{
//   res.send("welcome to my website");
// });

app.get("/",(req,res)=>{
  res.send("i am root");
})

app.get("*",(req,res)=>{
  res.send("This page does not exist");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});




// app.get('/', function (req, res) {
  // res.send('hey I am root');
//  let count="select count(*) from LoginInfo";

//   try{
//     connection.query(count, (err,result)=>{
//       if (err) throw err;
//         let num=result[0]["count(*)"]
//         console.log(result[0]["count(*)"]); // results contains rows returned by server
//         res.render("count.ejs",{num});
//       }
//     );


//   }catch(err){
//     console.log(err);
//     res.send("error in DB");

//   }
// });

// app.get("/data",(req,res)=>{
//   let data="select * from LoginInfo";
//   try{
//     connection.query(data, (err,result)=>{
//       if (err) throw err;
        // let num=result[0]["count(*)"]
//         console.log(result); // results contains rows returned by server
//         res.send(result[6].username);
//       }
//     );
//   }catch(err){
//     console.log(err);
//     res.send("error in DB");

//   }

// });