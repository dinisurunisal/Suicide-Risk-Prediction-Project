const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const mySql = require("../../sql");
const axios = require('axios');

/*
Add patient Record
Search patient Record by year/year+month
Get all Patients Records of a patient
Delete selected patient Record
get records asc by date
get records desc ny date
*/

//----Adding a patient record-------
exports.add_patientRecord = async function (req, res, next) {
    console.log("Inside the patient record adding api");
    let result = "LOW RISK";
    const prediction = await axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/predict',
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
        data: req.body,
    }).catch(e => e)
    if (prediction instanceof Error) {
        result = "Cannot say Exactly";
        console.log('Error E:', prediction)
    } else {
        result = prediction['data']['Prediction'];
    }
    console.log(prediction['data']['Prediction']);

    // let values = [
    //     req.body.NIC,
    //     req.body.Age,
    //     new Date(),
    //     req.body.Religon,
    //     req.body.Race,
    //     req.body.Gender,
    //     req.body.Nature_Of_Occupation,
    //     req.body.Civil_Status,
    //     req.body.Education_Level,
    //     req.body.Reason,
    //     req.body.Lifetime_Psychiatric_Hospitalizations,
    //     req.body.Past_Suicide_Attempts,
    //     req.body.Any_suicidal_thoughts_mentioned,
    //     req.body.Self_Injurious_Behaviour,
    //     req.body.Psychiatric_Disorders,
    //     req.body.Past_Illnesses,
    //     req.body.Alcohol_drug_Consumption,
    //     req.body.Anger,
    //     req.body.Sleep_Problem,
    //     req.body.Social_Iscolation,
    //     req.body.Sad_Weary,
    //     req.body.Humilated,
    //     req.body.deleted,
    //     req.body.patientId,
    //     req.body.ID];

    let Religon = req.body.Religon;
    if (Religon === "0") {
        Religon = 'Buddhist';
        console.log('Religon :' + Religon);
    } else if (Religon === "1") {
        Religon = 'Christian';
        console.log('Religon :' + Religon);
    } else if (Religon === "2") {
        Religon = 'Hindu';
        console.log('Religon :' + Religon);
    } else if (Religon === "3") {
        Religon = 'Islam';
        console.log('Religon :' + Religon);
    } else {
        Religon = 'Other';
        console.log('Religon :' + Religon);
    }

    let Race = req.body.Race;
    if (Race === "0") {
        Race = 'Burger';
        console.log('Race :' + Race);
    } else if (Race === "1") {
        Race = 'Muslim';
        console.log('Race :' + Race);
    } else if (Race === "2") {
        Race = 'Other';
        console.log('Race :' + Race);
    } else if (Race === "3") {
        Race = 'Sinhalese';
        console.log('Race :' + Race);
    } else {
        Race = 'Tamil';
        console.log('Race :' + Race);
    }

    let Gender = req.body.Gender;
    (Gender === "0") ? Gender = 'Male' : Gender = 'Female';
    console.log('Gender :' + Gender);

    let Nature_Of_Occupation = req.body.Nature_Of_Occupation;
    if (Nature_Of_Occupation == "0") {
        Nature_Of_Occupation = 'Administrative, Executive & Managerial';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "1") {
        Nature_Of_Occupation = 'Farming, fishing & forestry workers';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "2") {
        Nature_Of_Occupation = 'Armed Services';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "3") {
        Nature_Of_Occupation = 'Clerical & related workers';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "4") {
        Nature_Of_Occupation = 'Pensioner';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "5") {
        Nature_Of_Occupation = 'Police';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "6") {
        Nature_Of_Occupation = 'Clarical workers & labourers';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "7") {
        Nature_Of_Occupation = 'Professional Workers.';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "8") {
        Nature_Of_Occupation = 'Sales workers';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "9") {
        Nature_Of_Occupation = 'Security Personnel';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "10") {
        Nature_Of_Occupation = 'Cooks/ Tailors/ Barbers/ etc...';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "11") {
        Nature_Of_Occupation = 'Student';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else if (Nature_Of_Occupation == "12") {
        Nature_Of_Occupation = 'Unemployed Persons';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    } else {
        Nature_Of_Occupation = 'Not Mentioned';
        console.log('Nature_Of_Occupation :' + Nature_Of_Occupation);
    }



    let Civil_Status = req.body.Civil_Status;
    if (Civil_Status === "0") {
        Civil_Status = 'Divourced';
        console.log('Civil_Status :' + Civil_Status);
    } else if (Civil_Status === "1") {
        Civil_Status = 'Married';
        console.log('Civil_Status :' + Civil_Status);
    } else if (Civil_Status === "2") {
        Civil_Status = 'Unmarried';
        console.log('Civil_Status :' + Civil_Status);
    } else {
        Civil_Status = 'Widow';
        console.log('Civil_Status :' + Civil_Status);
    }


    let Education_Level = req.body.Education_Level;
    if (Education_Level == "0") {
        Education_Level = 'From Grade 1 to 7 ';
        console.log('Education_Level :' + Education_Level);
    } else if (Education_Level == "1") {
        Education_Level = 'Other';
        console.log('Education_Level :' + Education_Level);
    } else if (Education_Level == "2") {
        Education_Level = 'Passed G.C.E (A/L)';
        console.log('Education_Level :' + Education_Level);
    } else if (Education_Level == "3") {
        Education_Level = ' Passed G.C.E (O/L)';
        console.log('Education_Level :' + Education_Level);
    } else if (Education_Level == "4") {
        Education_Level = 'Passed Grade 8 ';
        console.log('Education_Level :' + Education_Level);
    } else if (Education_Level == "5") {
        Education_Level = 'School Not Attended';
        console.log('Education_Level :' + Education_Level);
    } else {
        Education_Level = 'University Degree or above';
        console.log('Education_Level :' + Education_Level);
    }

    let Reason = req.body.Reason;
    if (Reason === "0") {
        Reason = 'Addiction to narcotic drugs ';
        console.log('Reason:' + Reason);
    } else if (Reason === "1") {
        Reason = 'Aggrieved over the death parents/relations';
        console.log('Reason:' + Reason);
    } else if (Reason === "2") {
        Reason = 'Chronic diseases & Physical disabilities ';
        console.log('Reason:' + Reason);
    } else if (Reason === "3") {
        Reason = 'Economic problems ';
        console.log('Reason:' + Reason);
    } else if (Reason === "4") {
        Reason = 'Employment problems';
        console.log('Reason:' + Reason);
    } else if (Reason === "5") {
        Reason = 'Failure at the examination';
        console.log('Reason:' + Reason);
    } else if (Reason === "6") {
        Reason = 'Harrasment by a family member';
        console.log('Reason:' + Reason);
    } else if (Reason === "7") {
        Reason = 'Ill-treatment by the children';
        console.log('Reason:' + Reason);
    } else if (Reason === "8") {
        Reason = 'Loss of property';
        console.log('Reason:' + Reason);
    } else if (Reason === "9") {
        Reason = 'Mental Disorders';
        console.log('Reason:' + Reason);
    } else if (Reason === "10") {
        Reason = 'None';
        console.log('Reason:' + Reason);
    } else if (Reason === "11") {
        Reason = 'Other Reasons';
        console.log('Reason:' + Reason);
    }
    else if (Reason === "12") {
        Reason = 'Problems caused with the elders';
        console.log('Reason:' + Reason);
    } else if (Reason === "13") {
        Reason = 'Sexual incapacity';
        console.log('Reason:' + Reason);
    } else {
        Reason = 'Problems with love affairs';
        console.log('Reason:' + Reason);
    }

    let Past_Suicide_Attempts = req.body.Past_Suicide_Attempts;
    (Past_Suicide_Attempts == "0") ? Past_Suicide_Attempts = 'NO' : Past_Suicide_Attempts = 'YES';
    console.log('Past_Suicide_Attempts :' + Past_Suicide_Attempts);

    let Lifetime_Psychiatric_Hospitalizations = req.body.Lifetime_Psychiatric_Hospitalizations;
    (Lifetime_Psychiatric_Hospitalizations == "0") ? Lifetime_Psychiatric_Hospitalizations = 'NO' : Lifetime_Psychiatric_Hospitalizations = 'YES';
    console.log('Lifetime_Psychiatric_Hospitalizations :' + Lifetime_Psychiatric_Hospitalizations);


    let Any_suicidal_thoughts_mentioned = req.body.Any_suicidal_thoughts_mentioned;
    (Any_suicidal_thoughts_mentioned == "0") ? Any_suicidal_thoughts_mentioned = 'NO' : Any_suicidal_thoughts_mentioned = 'YES';
    console.log('Any_suicidal_thoughts_mentioned :' + Any_suicidal_thoughts_mentioned);


    let Self_Injurious_Behaviour = req.body.Self_Injurious_Behaviour;
    (Self_Injurious_Behaviour == "0") ? Self_Injurious_Behaviour = 'NO' : Self_Injurious_Behaviour = 'YES';
    console.log('Self_Injurious_Behaviour :' + Self_Injurious_Behaviour);


    let Psychiatric_Disorders = req.body.Psychiatric_Disorders;
    if (Psychiatric_Disorders === "0") {
        Psychiatric_Disorders = 'BPD';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else if (Psychiatric_Disorders === "1") {
        Psychiatric_Disorders = 'Bipolar Disorder';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else if (Psychiatric_Disorders === "2") {
        Psychiatric_Disorders = 'Depression';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else if (Psychiatric_Disorders === "3") {
        Psychiatric_Disorders = 'None';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else if (Psychiatric_Disorders === "4") {
        Psychiatric_Disorders = 'Other';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else if (Psychiatric_Disorders === "5") {
        Psychiatric_Disorders = 'PTSD';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    } else {
        Psychiatric_Disorders = 'Schizophrenia';
        console.log('Psychiatric_Disorders :' + Psychiatric_Disorders);
    }


    let Past_Illnesses = req.body.Past_Illnesses;
    if (Past_Illnesses === "0") {
        Past_Illnesses = 'Asthma';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "1") {
        Past_Illnesses = 'COPD';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "2") {
        Past_Illnesses = 'Cancer';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "3") {
        Past_Illnesses = 'Chronic pain';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "4") {
        Past_Illnesses = 'Diabetes';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "5") {
        Past_Illnesses = ' HIV/AIDS';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "6") {
        Past_Illnesses = 'Heart Diseases';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "7") {
        Past_Illnesses = 'Kidney Disease';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else if (Past_Illnesses === "8") {
        Past_Illnesses = 'Other';
        console.log('Past_Illnesses :' + Past_Illnesses);
    } else {
        Past_Illnesses = 'None';
        console.log('Past_Illnesses :' + Past_Illnesses);
    }


    let Alcohol_drug_Consumption = req.body.Alcohol_drug_Consumption;
    if (Alcohol_drug_Consumption == "0") {
        Alcohol_drug_Consumption = 'Frequent';
        console.log('Alcohol_drug_Consumption :' + Alcohol_drug_Consumption);
    } else if (Alcohol_drug_Consumption == "1") {
        Alcohol_drug_Consumption = 'Moderate';
        console.log('Alcohol_drug_Consumption :' + Alcohol_drug_Consumption);
    } else {
        Alcohol_drug_Consumption = 'None';
        console.log('Alcohol_drug_Consumption :' + Alcohol_drug_Consumption);
    }

    let Anger = req.body.Anger;
    (Anger == "0") ? Anger = 'NO' : Anger = 'YES';
    console.log('Anger :' + Anger);

    let Sleep_Problem = req.body.Sleep_Problem;
    (Sleep_Problem == "0") ? Sleep_Problem = 'NO' : Sleep_Problem = 'YES';
    console.log('Sleep_Problem :' + Sleep_Problem);

    let Social_Iscolation = req.body.Social_Iscolation;
    (Social_Iscolation == "0") ? Social_Iscolation = 'NO' : Social_Iscolation = 'YES';
    console.log('Social_Iscolation :' + Social_Iscolation);

    let Sad_Weary = req.body.Sad_Weary;
    (Sad_Weary == "0") ? Sad_Weary = 'NO' : Sad_Weary = 'YES';
    console.log('Sad_Weary :' + Sad_Weary);

    let Humilated = req.body.Humilated;
    (Humilated == "0") ? Humilated = 'NO' : Humilated = 'YES';
    console.log('Humilated :' + Humilated);

    let NIC = req.body.NIC;
    console.log('NIC :' + NIC);
    let Age = req.body.Age;
    console.log('Age :' + Age);
    let date = new Date();
    console.log('Date :' + date);
    let patientId = req.body.patientId;
    console.log('patientId :' + patientId);
    let ID = req.body.ID;
    console.log('ID :' + ID);
    let deleted = 'false';

    let values = [
        NIC,
        Age,
        date,
        Religon,
        Race,
        Gender,
        Nature_Of_Occupation,
        Civil_Status,
        Education_Level,
        Reason,
        Lifetime_Psychiatric_Hospitalizations,
        Past_Suicide_Attempts,
        Any_suicidal_thoughts_mentioned,
        Self_Injurious_Behaviour,
        Psychiatric_Disorders,
        Past_Illnesses,
        Alcohol_drug_Consumption,
        Anger,
        Sleep_Problem,
        Social_Iscolation,
        Sad_Weary,
        Humilated,
        deleted,
        patientId,
        ID];

    let sql = "INSERT INTO patientrecords(NIC,age,date,religon,race,gender,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad, humiliated,deleted,patientId,ID,result) VALUES  (?,?)";
    mySql.query(sql, [values, result], (err, rows, fields) => {
        if (err === null) {
            console.log("Patient record added successfully");
            res.status(201).send({ success: true, message: "Patient Record successfully added!", 'RecordID': rows.insertId });
        } else {
            console.log(err)
            res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
        }
    });
}

//----get patient records of a specific patient of a specific doctor
exports.all_RecordOFaPatient = function (req, res, next) {
    let patient_id = req.body.patient_id;
    let doc_id = req.body.doc_id;
    console.log(patient_id, doc_id);
    let sql = 'SELECT * FROM patientrecords where patientId = ? and ID = ?';
    mySql.query(sql, [patient_id, doc_id], (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No Records found" });
        }
    });

}

//----Getiing details of a record
exports.get_patientRecord = function (req, res, next) {
    let recordId = req.params.recordId;
    let sql = 'SELECT * FROM patientrecords WHERE recordId = ?';
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
    let sql_ = 'SELECT * FROM patientrecords WHERE recordId =?';
    mySql.query(sql_, [recordId], (err, rows, fields) => {
        console.log("Total Records:- " + rows.length);
        if (rows.length != 0) {
            let sql_ = 'DELETE FROM patientrecords WHERE recordId=?';
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
    let sql = 'SELECT * FROM patientrecords ORDER BY date DESC where NIC = ? and ID = ?';
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
    let sql = 'SELECT * FROM patientrecords ORDER BY date ASC  where NIC = ? and ID = ?';
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

//----Getiing the result of a record
exports.record_result = function (req, res, next) {
    console.log('result API');
    let sql = 'SELECT * FROM patientrecords ORDER BY recordID DESC LIMIT 1';
    mySql.query(sql, (err, rows, fields) => {
        if (rows.length != 0) {
            console.log(rows);
            res.status(200).send({ success: true, rows });
        } else {
            console.log(err);
            res.status(404).send({ success: true, message: "No matching patient record found" });
        }
    });
}