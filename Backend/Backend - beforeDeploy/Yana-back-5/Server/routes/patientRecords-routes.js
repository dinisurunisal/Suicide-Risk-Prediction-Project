const express = require('express');
const router = express.Router();
const check_auth = require("../middleware/check-auth");
const patientRecordController = require('../Controllers/patientRecord-controller');


router.post('/addPatientRecord', check_auth, patientRecordController.add_patientRecord);
router.post('/allRecordsOfAPatient', check_auth, patientRecordController.all_RecordOFaPatient);
router.get('/orderByDesc/:ID', check_auth, patientRecordController.order_by_old);
router.get('/orderByAsc/:ID', check_auth, patientRecordController.order_by_new);
router.get('/oneRecord/:recordId', check_auth, patientRecordController.get_patientRecord);
router.delete('/deleteOneRecord/:recordId', check_auth, patientRecordController.delete_patientRecord);
router.get('/result/', check_auth, patientRecordController.record_result);
//router.get('/oneRecord/:recordId', check_auth, patientRecordController.get_patientRecord);

module.exports = router;