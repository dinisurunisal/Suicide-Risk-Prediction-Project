const express = require('express');
const bodyparser = require('body-parser');

const users = require('./Server/routes/user-routes');
const patients = require('./Server/routes/patient-routes');
const patient_records = require('./Server/routes/patientRecords-routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,access-control-allow-origin");
    next();
});

app.use('/user', users);
app.use('/patient', patients);
app.use('/patientRecords', patient_records);

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
