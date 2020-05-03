const express = require('express');
const router = express.Router();
const check_auth = require("../middleware/check-auth");
const patientController = require('../Controllers/patient-controller');

router.post('/addPatient', check_auth, patientController.add_patient);              //add patient
router.get('/allPatients/:ID', check_auth, patientController.all_patient);          //all the patients of a specific doctor
router.get('/get/:patient_Id', check_auth, patientController.get_patient);          //get details of one patient using patient ID
router.get('/searchPatient/:ID', check_auth, patientController.search_patient);     //doctor can search a patient using NIC
router.delete('/delete/:patientId', check_auth, patientController.delete_patient);  //delete a patient using patient ID

module.exports = router;