var express = require('express'); 
var bodyparser = require('body-parser'); // json
var mysql = require('mysql');   // database connection with mysql
const cors = require('cors');
const axios = require('axios')


var conn = mysql.createConnection({//database connection
    host:'localhost',
    user:'root',
    password:'',
    database:'sdgp'
});

conn.connect((err)=>{
    if(!err)
    console.log("DB Connected")
    else
    console.log(err)
});

var app = express();    //start to use express framework
const message = `Please send a GET request to /predict
`
app.use(cors()) // U

app.use(bodyparser.urlencoded({ //start to use body parser
    extended: true
  }));

  const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
  ];
  
  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  
  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));
  
  app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
  })

app.use(bodyparser.json());

/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

app.listen(8080,()=>console.log("Express Server Started")); //can give any port number>1000

app.get('/api',(req,res)=>{
	res.sendStatus(200); //ok status
});



//************************ DOCTOR ******************************

//Insert data into doctor table
app.post('/api/users',(req,res)=>{
    var values = [req.body.doctorLicenseNo,req.body.NIC,req.body.firstName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.address,req.body.currentHospital,req.body.password,req.body.confirmPassword,req.body.checked,req.body.randomNumber];
    var sql = 'INSERT INTO users(doctorLicenseNo,NIC,firstName,lastName,email,phoneNumber,address,currentHospital,password,confirmPassword,checked,randomNumber) VALUES  (?)';

    conn.query(sql,[values],(err,rows,fields)=>{
        if(!err){
            res.status(201);
            res.send({'doctor_ID':rows.insertId})
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})


//delete a doctor  by licenseID
app.delete('/api/doctor', function (req, res) {
    console.log(req.body);
    conn.query('DELETE FROM `doctor` WHERE `doctorLicenseNo`=?', [req.body.doctorLicenseNo], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

 //update doctor by lisence id
 app.put('/api/users', function (req, res) {
    conn.query('UPDATE users SET NIC=? ,firstName=? ,lastName=? ,email=? ,phoneNumber=?,address=?,currentHospital=?,password=?,confirmPassword=?  WHERE doctorLicenseNo=?', [req.body.NIC,req.body.firstName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.address,req.body.currentHospital,req.body.password,req.body.confirmPassword,req.body.doctorLicenseNo] , function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //get doctor by license id
 app.get('/api/users/:doctorLicenseNo',(req,res)=>{
    var sql = 'SELECT * FROM users WHERE doctorLicenseNo = ?';
    conn.query(sql,[req.params.doctorLicenseNo],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})
 //********************* PATIENT **************************

 //Insert data into patient table
app.post('/api/patient',(req,res)=>{
    var values = [req.body.doctorId,req.body.NIC,req.body.deleted];
    var sql = 'INSERT INTO patient(doctorId,NIC,deleted) VALUES  (?)';
    conn.query(sql,[values],(err,rows,fields)=>{
        if(!err){
            res.status(201);
            res.send({'patient_ID':rows.insertId})
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//delete patient
 app.delete('/api/patient', function (req, res) {
    console.log(req.body);
    conn.query('DELETE FROM `patient` WHERE `NIC`=?', [req.body.NIC], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

 //delete all patients
 app.delete('/api/patients',(req,res)=>{
    var sql = ' DELETE FROM patient';
    conn.query(sql,[req.params],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

 //update patient 
 app.put('/api/patient', function (req, res) {
    conn.query('UPDATE patient SET doctorId=? WHERE  NIC=? ', [req.body.patientId,req.body.NIC] , function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //get patient by NIC
 app.get('/api/patient/:NIC',(req,res)=>{
    var sql = 'SELECT * FROM patient WHERE NIC = ?';
    conn.query(sql,[req.params.NIC],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//get all patients
app.get('/api/patient',(req,res)=>{
    var sql = 'SELECT * FROM patient';
    conn.query(sql,[req.params],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})


//************************************ PATIENT RECORD ************************************

//insert data into patient record
app.post('/api/patientrecord',(req,res)=>{
    var values = [req.body.NIC,req.body.doctorId,req.body.age,req.body.date,req.body.gender,req.body.religon,req.body.race,req.body.occupation,req.body.civilStatus,req.body.educationalLevel,req.body.reason,req.body.lifeTimePsychiatricHospitalizations,req.body.pastSuicideAttempts,req.body.anySuicidalThoughts,req.body.selfInjuriousBehaviour,req.body.psychiatricDisorders,req.body.pastIllness,req.body.alcoholConsumption,req.body.anger,req.body.sleepProblem,req.body.socialIsolation,req.body.sad,req.body.humiliated];
    var sql = 'INSERT INTO patientrecord(NIC,doctorId,age,date,gender,religon,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated) VALUES  (?)';

    conn.query(sql,[values],(err,rows,fields)=>{
        if(!err){
            res.status(201);
            res.send({'record_ID':rows.insertId})
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//insert data into patient record2
app.post('/api/patientrecord2',(req,res)=>{
    var values = [req.body.age,req.body.gender,req.body.religon,req.body.race,req.body.occupation,req.body.civilStatus,req.body.educationalLevel,req.body.reason,req.body.lifeTimePsychiatricHospitalizations,req.body.pastSuicideAttempts,req.body.anySuicidalThoughts,req.body.selfInjuriousBehaviour,req.body.psychiatricDisorders,req.body.pastIllness,req.body.alcoholConsumption,req.body.anger,req.body.sleepProblem,req.body.socialIsolation,req.body.sad,req.body.humiliated];
    var sql = 'INSERT INTO patientrecord2(age,gender,religon,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated) VALUES  (?)';

    conn.query(sql,[values],(err,rows,fields)=>{
        if(!err){
            res.status(201);
            res.send({'record_ID':rows.insertId})
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//get patient record by NIC
app.get('/api/patientrecord/:NIC',(req,res)=>{
    var sql = 'SELECT * FROM patientrecord WHERE NIC = ?';
    conn.query(sql,[req.params.NIC],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//get patient record by doctorlicenseid
app.get('/api/patientrecord/:doctorId',(req,res)=>{
    var sql = 'SELECT * FROM patientrecord WHERE doctorId = ?';
    conn.query(sql,[req.params.doctorId],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

//delete by NIC
app.delete('/api/patientrecordNIC', function (req, res) {
    console.log(req.body);
    conn.query('DELETE FROM `patientrecord` WHERE `NIC`=?', [req.body.NIC], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

//delete by doctorlisenceid
app.delete('/api/patientrecordID', function (req, res) {
    console.log(req.body);
    conn.query('DELETE FROM `patientrecord` WHERE `doctorId`=?', [req.body.doctorId], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

//************************************ Pickle ************************************


//  const getPatientRecords = () => {
//     try {
//       return axios.get('http://localhost:8100/home')
//     } catch (error) {
//       console.error(error)
//     }
//   }


  
// app.post('/', (req, res) => {
//     res.status(400).send(message)
//   })
  
  
  app.post('/prediction', async (req, res) => {
    const { query } = req
    console.log('the json', query)
  
      const prediction = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/predict',
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        data: query,
      })
      
      res.send({ prediction: prediction.data })
      return
  })
  
  app.use('*', (req, res) => { 
    res.status(400).send(message)
  })
  
  //get patient record by NIC
app.get('/api/patientrecord/:NIC',(req,res)=>{
    var sql = 'SELECT * FROM patientrecord WHERE NIC = ?';
    conn.query(sql,[req.params.NIC],(err,rows,fields)=>{
        if(!err){
            res.status(200);
            res.send(rows)
        }else{
            res.sendStatus(500);
            console.log(err)
        }
    })
})

app.get('/test', function(req, res){
    conn.query('select * from persons', function(error, results){
        if ( error ){
            res.status(400).send('Error in database operation');
        } else {
            res.send(results);
        }
    });
});
