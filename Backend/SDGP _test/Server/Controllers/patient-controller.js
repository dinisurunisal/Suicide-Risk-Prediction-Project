const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const mySql = require("../../sql");

/*
Add patient
Search patient
Get all Patients
Delete selected patient
*/

//ADD PATIENT
exports.add_patient = function (req, res, next) {
    let ID = req.body.ID;
    let NIC = req.body.NIC;
    let deleted = "false";
    //if NIC haven't 10 values
    if (NIC.length == 10) {
        let sql = 'INSERT INTO patient(ID,NIC,deleted) VALUES  (?,?,?)';
        mySql.query(sql, [ID, NIC, deleted], (err, rows, fields) => {
            if (err === null) {
                console.log("Patient added successfully");
                res.status(201).send({ success: true, message: "Patient successfully added!", 'PatientId': rows.insertId });
            } else {
                console.log(err)
                res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
            }
        });
    } else {
        console.log(err)
        res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
    }

}

//GET ALL PATIENT
exports.all_patient = function (req, res, next) {
    let ID = req.params.ID;
    let sql = 'SELECT * FROM patient where ID = ?';
    mySql.query(sql, [ID], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No patients found" });
        }
    });

}

//Getting the details of a patient - user clicking on one patient acc
exports.get_patient = function (req, res, next) {
    let patientId = req.params.patientId;
    let sql = 'SELECT * FROM patient WHERE patientId = ?';
    mySql.query(sql, [patientId], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No matching patient found" });
        }
    });

}

//Delete using patient ID - then no need to worry about userID
exports.delete_patient = function (req, res, next) {
    let patientId = req.params.patientId;
    console.log(patientId);
    let sql_ = 'SELECT * FROM patient WHERE patientId = ? ';
    mySql.query(sql_, [patientId], (err, rows, fields) => {
        console.log("Total Records:- " + rows.length);

        if (rows.length != 0) {
            let sql_ = 'SELECT * FROM patientrecord WHERE patientId =?';
            mySql.query(sql_, [patientId], (err, rows, fields) => {
                console.log("Total Records:- " + rows.length);

                if (rows.length != 0) {
                    let sql_ = 'DELETE FROM patientrecord WHERE patientId=?';
                    mySql.query(sql_, [patientId], (err, rows, fields) => {
                        res.status(200).send({ success: true, message: "Patient account successfully deleted.!" });

                        let sql = 'DELETE FROM patient WHERE patientId=?';
                        mySql.query(sql, [patientId], (err, rows, fields) => {
                            res.status(200).send({ success: true, message: "Patient account successfully deleted..!" });
                        });
                    });

                } else {
                    let sql = 'DELETE FROM patient WHERE patientId=?';
                    mySql.query(sql, [patientId], (err, rows, fields) => {
                        res.status(200).send({ success: true, message: "Patient account successfully deleted...!" });
                    });

                }
            });
        } else {
            res.status(404).send({ success: false, message: "Incorrect patient ID" });
            console.log(err);
        }
    });
}

//SEARCH PATIENT
exports.search_patient = function (req, res, next) {
    let userID = req.params.ID;
    let patientNIC = req.body.NIC;
    let sql = 'SELECT * FROM patient where ID = ? and NIC = ?';
    mySql.query(sql, [userID, patientNIC], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No patients found" });
        }
    });

}
