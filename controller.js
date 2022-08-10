exports.intro = (req, res) => {
   // var scripts = [{ script: 'introj.js' }];
   // console.log(scripts);
    
    res.render('intro',{style: 'intro.css', scr:'introj.js'});
   
    //res.render('welcome',{style: 'welcome.css'});
}

exports.welcome = (req, res) => {

    res.render('welcome',{style: 'welcome.css'});
    
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
     // console.log("Connected!");
      //const sql = `INSERT INTO players (name,Reg,Department,age,position,session,jersey,image) VALUES ('${name}','${reg}','${department}','${age}','${position}','${session}','${jersey}','${image}')`;
      con.query(`SELECT * FROM players where Department='${req.params.name}'`, function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.render('teampage',{result});
    
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
  
  console.log("islam");
    
  res.render('seasonpage',{style: 'seasonpage.css'});
   
    
    //res.render('seasonpage',{style: 'seasonpage.css'});
    
}