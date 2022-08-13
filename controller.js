exports.intro = (req, res) => {
   // var scripts = [{ script: 'introj.js' }];
   // console.log(scripts);
    
    res.render('intro',{style: 'intro.css', scr:'introj.js'});
   
    //res.render('welcome',{style: 'welcome.css'});
}

exports.welcome = (req, res) => {

    res.render('welcome',{style: 'welcome.css'});
    
}
exports.event = (req, res) => {

  res.render('event',{style: 'event.css',scr:'event.js'});
  
}

exports.season = (req, res) => {
  
    
 // res.render('team',{style: 'team.css'});
   
    
    res.render('seasonpage',{style: 'seasonpage.css'});
    
}
exports.team = (req, res) => {

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "saifulislam14",
      database: "FOOTBALL"
    });
    
    con.connect(function(err) {
      if (err) throw err;
     
      con.query(`SELECT * FROM players where Department='${req.params.name}'`, function (err, result) {
        if (err) throw err;
        
        res.render('blog',{result,style:'teampage.css',TEAM:req.params.name});
    
      });
    
    });
   
    
}


exports.profile = (req, res) => {

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "saifulislam14",
      database: "FOOTBALL"
    });
    
    con.connect(function(err) {
      if (err) throw err;
     // console.log("Connected!");
      //const sql = `INSERT INTO players (name,Reg,Department,age,position,session,jersey,image) VALUES ('${name}','${reg}','${department}','${age}','${position}','${session}','${jersey}','${image}')`;
      con.query(`SELECT * FROM players where Reg='${req.params.Reg}'`, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.render('profile',{result , style: 'profile.css'});
    
      });
    
    });

    
}
exports.search = (req, res) => {
    const searchvalue = req.body.search;
    

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "saifulislam14",
      database: "FOOTBALL"
    });
    
    con.connect(function(err) {
      if (err) throw err;
     // console.log("Connected!");
      //const sql = `INSERT INTO players (name,Reg,Department,age,position,session,jersey,image) VALUES ('${name}','${reg}','${department}','${age}','${position}','${session}','${jersey}','${image}')`;
      con.query("SELECT * FROM players where name like ? or Reg like ? or position like ?",
      ["%" + searchvalue + "%", "%" + searchvalue + "%", "%" + searchvalue + "%"], function (err, result) {
        if (err) throw err;
        //console.log(result);
        //<li><a href="#">Blog</a></li>
               // <li><a href="#">About Us</a></li>
               res.render('teampage',{result});
    
      });
    
    });
  }

    
exports.signin = (req, res) => {
  
  console.log("saiful");
    
  res.render('signin',{style: 'signin.css'});
   
    
    //res.render('seasonpage',{style: 'seasonpage.css'});
    
}
exports.signincheck = (req, res) => {
  const email=req.body.email;
  const username=req.body.username;
  const password=req.body.password;
 


  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "saifulislam14",
    database: "FOOTBALL"
  });
  
  con.connect(function(err) {
    if (err) throw err;
   // console.log("Connected!");
    //const sql = `INSERT INTO players (name,Reg,Department,age,position,session,jersey,image) VALUES ('${name}','${reg}','${department}','${age}','${position}','${session}','${jersey}','${image}')`;
    con.query("SELECT * FROM host where username like ? and password like ?",
    [username, password], function (err, result) {
      console.log(result);
      if (err) throw err;
      if(result.length>0)
      {
        console.log(result[0].Email);
        if(result[0].Email==null)
        {
          console.log('email is null');
          con.query("UPDATE host SET Email=? where username like ? and password like ?",
      [email,username,password], function (err, result) {
        if (err) throw err;
       
               res.render('aftersignin',{style: 'aftersignin.css'});
    
      });
         
        }
         else if(result[0].Email!=email)
          {  res.render('signin', {style:'signin.css' ,alert: 'Youe Email  is incorrect.'});
          }
          else
          res.render('hostupdate',{style: 'hostupdate.css'});

       
        
 
      
      }
      else
      res.render('signin', {style:'signin.css' ,alert: 'username or password is incorrect.'});

     
  
    });
  
  });  
}

exports.tournament = (req, res) => {


  var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "saifulislam14",
      database: "FOOTBALL"
    });
    
    con.connect(function(err) {
      if (err) throw err;
     
      con.query(`SELECT * FROM tournament where tournamentname='${req.params.tournamentname}'`, function (err, result) {
        if (err) throw err;
        
        res.render('tournamentpage',{result,style: 'tournament.css',tournament:req.params.tournamentname});
    
      });
    
    });
  

 
  
}
exports.blog = (req, res) => {

  res.render('hostupdate',{style: 'hostupdate.css'});
  
}
exports.uploadtournament = (req, res) => {

  const {tournamentname,teamnumber,story}=req.body;
  console.log(story);
  const image=req.file.buffer.toString('base64');
 //console.log(req.file);


  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "saifulislam14",
    database: "FOOTBALL"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = `INSERT INTO tournament (Tournamentname,Logo,teamnumber,History) VALUES ('${tournamentname}','${image}','${teamnumber}','${story}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  
  });




  var sql =`CREATE TABLE ${tournamentname} (TEAM1 VARCHAR(255), TEAM2 VARCHAR(255), match_no VARCHAR(255),match_date VARCHAR(255), score_team1 VARCHAR(255),score_team2 VARCHAR(255))`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });



   
res.render('hostupdate',{style: 'hostupdate.css',name:tournamentname});
  
}
exports.hostupdate = (req, res) => {

  const {tournamentname,team1,team2,st1,st2,matchno,matchdate,}=req.body;
  const a=matchdate.toString().slice(0,16);
  console.log(a);


  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "saifulislam14",
    database: "FOOTBALL"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = `INSERT INTO ${tournamentname} (TEAM1,TEAM2,match_no,match_date,score_team1,score_team2) VALUES ('${team1}','${team2}','${matchno}','${a}','${st1}','${st2}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });


    con.query(`SELECT * FROM ${tournamentname}  `, function (err, result) {
      if (err) throw err;
      console.log(result);
      
      res.render('result',{result,style:'result.css',name:tournamentname});
  
    });
  
  });


  
  }


exports.fixture = (req, res) => {

const tournamentname=req.params.tournament;
console.log(tournamentname);

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "saifulislam14",
    database: "FOOTBALL"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    if(tournamentname!='Js')
    {
    con.query(`SELECT * FROM ${tournamentname}  `, function (err, result) {
      if (err) throw err;
      console.log(result);
      
      res.render('result',{result,style:'result.css'});
    });}
  
  });

  
}
