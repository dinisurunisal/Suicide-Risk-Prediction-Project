const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const mySql = require("../../sql");
const nodemailer = require("nodemailer");


exports.register = function (req, res, next) {
    let userNIC = req.body.NIC;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let address = req.body.address;
    let doctorLicenseNo = req.body.doctorLicenseNo;
    let currentHospital = req.body.currentHospital;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let checked = "false";
    let randomNumber = Math.random() * (99900 - 10000) + 54;


    if (password === confirmPassword) {
        let sql = 'INSERT INTO users(NIC, firstName, lastName, email, phoneNumber, address, doctorLicenseNo, currentHospital, checked, randomNumber, password) VALUES  (?,?,?,?,?,?,?,?,?,?,?)';
        mySql.query(sql, [userNIC, firstName, lastName, email, phoneNumber, address, doctorLicenseNo, currentHospital, checked, randomNumber, password], (err, rows, fields) => {
            if (err == null) {
                console.log("Users added successfully");
                res.status(201).send({ success: true, message: "User successfully added!", 'UserId': rows.insertId });
            } else {
                console.log(err)
                res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
            }
        });
    } else {
        console.log(err)
        res.status(422).send({ success: false, message: "Passwords are not matched" });
    }
}

//user login
exports.login = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let user = '';
    let sql = 'SELECT * FROM users where email=? and password=?';
    mySql.query(sql, [email, password], (err, rows, fields) => {
        if (err === null) {
            user = rows;
            if (user) {
                console.log(user);
                console.log(user[0]["password"]);
                if (password == user[0]["password"]) {
                    const token = jwt.sign({
                        user_id: user[0]["id"],
                        email: user[0]["email"]
                    },
                        config.env.JWT_KEY,
                        {
                            expiresIn: "2h"
                        });
                    return res.status(200).send({ success: true, message: "Login Successful!", token: token });
                }
                else {
                    console.log("Login failed!");
                    return res.status(401).send({ success: false, message: "Login failed!" });
                }
            } else {
                console.log("Login failed!");
                return res.status(401).send({ success: false, message: "Login failed!" });
            }
        } else {
            return res.status(401).send({ success: false, message: "Login failed!" });
        }
    });
};

exports.editUserDetails = function (req, res, next) {

}

exports.deleteUser = function (req, res, next) {

}