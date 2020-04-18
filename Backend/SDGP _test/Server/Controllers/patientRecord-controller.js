const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const mySql = require("../../sql");

/*
Add patient Record
Search patient Record by year/year+month
Get all Patients Records of a patient
Delete selected patient Record
get records asc by date
get records desc ny date
*/

//----Adding a patient record-------
exports.add_patientRecord = function (req, res, next) {
    var datetime = new Date();//current date
    let values = [req.body.NIC, req.body.age, new Date(), req.body.religon, req.body.race, req.body.gender, req.body.occupation, req.body.civilStatus, req.body.educationalLevel, req.body.reason, req.body.lifeTimePsychiatricHospitalizations, req.body.pastSuicideAttempts, req.body.anySuicidalThoughts, req.body.selfInjuriousBehaviour, req.body.psychiatricDisorders, req.body.pastIllness, req.body.alcoholConsumption, req.body.anger, req.body.sleepProblem, req.body.socialIsolation, req.body.sad, req.body.humiliated, req.body.deleted, req.body.patientId, req.body.ID];
    let sql = 'INSERT INTO patientrecord(NIC,age,date,religon,race,gender,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad, humiliated,deleted,patientId,ID) VALUES  (?)';
    mySql.query(sql, [values], (err, rows, fields) => {
        if (err === null) {
            console.log("Patient added successfully");
            res.status(201).send({ success: true, message: "Patient Record successfully added!", 'RecordID': rows.insertId });
        } else {
            console.log(err)
            res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
        }
    });
}

//----get patient records of a specific patient of a specific doctor
exports.all_RecordOFaPatient = function (req, res, next) {
    let NICpatient = req.body.NIC;
    let ID = req.body.ID;
    let sql = 'SELECT * FROM patientrecord where NIC = ? and ID = ?';
    mySql.query(sql, [NICpatient, ID], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No patients found" });
        }
    });

}

//----Getiing one record of a patient
exports.get_patientRecord = function (req, res, next) {
    let recordId = req.params.recordId;
    let sql = 'SELECT * FROM patientrecord WHERE recordId = ?';
    mySql.query(sql, [recordId], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No matching patient record found" });
        }
    });

}

exports.delete_patientRecord = function (req, res, next) {
    let recordId = req.params.recordId;
    let sql_ = 'SELECT * FROM patientrecord WHERE recordId =?';
    mySql.query(sql_, [recordId], (err, rows, fields) => {
        console.log("Total Records:- " + rows.length);
        if (rows.length != 0) {
            let sql_ = 'DELETE FROM patientrecord WHERE recordId=?';
            mySql.query(sql_, [recordId], (err, rows, fields) => {
                res.status(200).send({ success: true, message: "Patient record successfully deleted.!" });
            });
        } else {
            res.status(404).send({ success: false, message: "No patient records" });
        }
    });

}

//order the records by descending order
exports.order_by_old = function (req, res, next) {
    let NICpatient = req.body.NIC;
    let ID = req.body.ID;
    let sql = 'SELECT * FROM patientrecord ORDER BY date DESC where NIC = ? and ID = ?';
    mySql.query(sql, [NICpatient, ID], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No patients found" });
        }
    });

}
//SELECT * FROM members ORDER BY date_of_birth DESC;
exports.order_by_new = function (req, res, next) {
    let NICpatient = req.body.NIC;
    let ID = req.body.ID;
    let sql = 'SELECT * FROM patientrecord ORDER BY date ASC  where NIC = ? and ID = ?';
    mySql.query(sql, [NICpatient, ID], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No patients found" });
        }
    });
}
