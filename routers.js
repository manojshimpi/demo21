var express = require('express')
var router = express.Router()
const mysql = require('mysql')


// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});
// connect to database
dbConn.connect(); 

router.use(function timelog(req,res,next){
    //console.log(" Time " , Date.now())
    next();
})

// insert in to mysql

let response = {
    status: 200,
    data:[],
    message: null
};

// get record from mysql

// get all data send to client
router.get('/student', function (req, res) {
    dbConn.query('SELECT * FROM enno_user', function (error, results, fields) 
    {
        if (error) throw error;
        response.data=results;
        return res.json(response);
        //return res.send({ error: false, data: results, message: 'users list.' });

    });
});

// This Routing for Package
router.get('/pkgdata',function(req,res){
 dbConn.query('SELECT * FROM enno_pkg4',function(error,results,fields){
   if(error) throw error
   response.data=results
   //console.log(response);
   return res.json(response);
 });
});

//Get data From testimonial
router.get('/testi', function(req,res){
    dbConn.query('SELECT * FROM enno_testimonial',function(error,results,fields){
      if(error) throw error
      response.data=results;
      return res.json(response);
    });
})


//This Routing For the Pricing the data
router.get('/pricing',function(req,res){
   dbConn.query('SELECT * FROM enno_pricing', function(error,results,fields){
      if(error) throw error
      response.data=results;
      return res.json(response);
    });
});

 

// Get data from aboutus

router.get('/aboutus',function(req,res){
    dbConn.query('SELECT * FROM enno_aboutus',function(error,results,fields){
        if(error) throw error;
        response.data=results;
        return res.json(response);
    });
});

// get data from table name is home

router.get('/homeThree',function(req,res){
    dbConn.query('SELECT * FROM enno_home_three_boxes' ,function(error,results,fields){
        if(error) throw error;
        response.data=results;
        return res.json(response);

    })
})



// get single macthed data send to client

router.get('/user/:password/usershow/:username', function (req, res) {
    let password = req.params.password;
    console.log(password);
    let usern = req.params.username;
    if (!usern) {
        //return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    
    dbConn.query('SELECT * FROM enno_user where username=? and password=?', [usern , password] , function (error, results, fields) {
      if (error) throw error;
        
        if (results.length == 0) 
        {
            response.status='Error';
            console.log('Error');
        }
        else
         {
             console.log("Done!");
         }
         response.data=results[0];
         return res.json(response);
        //return res.send({ error: false, data: results[0], message: 'users list.' });
    });

});

// just demo router below
router.get('/student1',function(req,res)
{   
    //{"status":200,"data":{"username":"m1","password":"m2"},"message":"Welcome to new Page"}
    response.message='Welcome to new Page';
    response.data=dbObj;
    //console.log('test'+ dbObj.email_id);
    res.json(response);
    //res.send('This is about us page content');
})

// export Module for next page

module.exports = router


