//Database Connection
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nova'
});

conn.connect((err) => {
    if (!err) {
        console.log("DB Connected");
    }
    else {
        console.log(err);
    }
});

module.exports = conn;