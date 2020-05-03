const jwt = require('jsonwebtoken');
const config = require('../../config.json');
const mySql = require("../../sql");
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


exports.register = function (req, res, next) {
    let userNIC = req.body.NIC;
    let firstName = req.body.firstname;
    //let lastName = req.body.lastName;
    let email = req.body.email;
    let phoneNumber = parseInt(req.body.phonenumber);
    let address = req.body.address;
    //let doctorLicenseNo = req.body.doctorLicenseNo;
    //let currentHospital = req.body.currentHospital;
    let password = req.body.password;
    //let confirmPassword = req.body.confirmPassword;
    let checked = "false";
    let randomNumber = Math.random() * (99900 - 10000) + 54;


    //if (password.trim() === confirmPassword.trim()) {
    let sql = 'INSERT INTO users(NIC, firstName, email, phoneNumber, address, checked, randomNumber, password) VALUES  (?,?,?,?,?,?,?,?)';
    mySql.query(sql, [userNIC, firstName, email, phoneNumber, address, checked, randomNumber, password], (err, rows, fields) => {
        if (err == null) {
            console.log("Users added successfully");
            res.status(200).send({ success: true, message: "User successfully added!", 'UserId': rows.insertId });
        } else {
            console.log(err)
            res.status(422).send({ success: false, message: "Data incorrect or incomplete" });
        }
    });
    // } else {
    //     console.log(err)
    //     res.status(422).send({ success: false, message: "Passwords are not matched" });
    // }
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
            if (user.length != 0) {
                if (password == user[0]["password"]) {
                    const token = jwt.sign({
                        user_id: user[0]["ID"],
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


//forget password
exports.forgetPassword = function (req, res, next) {
    let email = req.body.email;
    let query_ = "SELECT * from users where email=?";

    mySql.query(query_, [email], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows[0] != null) {
                let randomNo = Math.floor(100000 + Math.random() * 900000);
                let transporter = nodemailer.createTransport(smtpTransport({
                    service: 'gmail',
                    host: 'smtp.gmail.com',
                    auth: {
                        user: 'yana.sdgp.2020@gmail.com',
                        pass: 'yana990120'
                    }
                }));

                let mailOptions = {
                    from: 'yana.sdgp.2020@gmail.com',
                    to: email,
                    subject: 'Rest Password of YANA Account',
                    text: 'Your YANA Token:' + randomNo
                };

                //  let query_0 = "UPDATE users set forgetPasswordNo=? where email=?";
                let query_0 = "UPDATE users set randomNumber=? where email=?";
                mySql.query(query_0, [randomNo, email], (err, rows) => {
                    if (err) {
                        console.log("Error Connecting to Server !");
                        console.log(err);
                        return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
                    } else {
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                console.log(error);
                                return res.status(404).send({ success: false, message: "Error connecting to mail server!" });
                            } else {
                                res.status(200).send({ success: true, data: { email: email, message: "Successfully send the mail" } });
                            }
                        });
                    }
                });

            } else {
                console.log("Invalid Email address!");
                return res.status(401).send({ success: false, message: "Invalid Email address!" });
            }
        }
    });
};
exports.changePassword = function (req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    let query_ = "UPDATE users set password=? where email=?";
    mySql.query(query_, [password, email], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            console.log(err);
            return res.status(401).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            res.status(200).send({ success: true, data: { email: email, password: password, message: "Password Successfully Changed" } });
        }
    });
};
exports.tokenValidation = function (req, res, next) {
    let email = req.body.email;
    let token = req.body.token;
    console.log(email, token);
    let query_ = "SELECT * from users where email=?";
    mySql.query(query_, [email], (err, rows) => {
        if (err) {
            console.log("Error Connecting to Server !");
            return res.status(404).send({ success: false, message: "Error Connecting to Server!" });
        } else {
            if (rows[0] != null) {
                if (rows[0]['randomNumber'] == token.trim()) {
                    console.log('true');
                    res.status(200).send({ success: true, data: { email: email, message: "Valid Token identified !" } });
                } else {
                    return res.status(401).send({ success: false, message: "Invalid token identified !" });
                }
            } else {
                console.log("Error Connecting to Server !");
                return res.status(404).send({ success: false, message: "Error Connecting to Server !" });
            }
        }
    });
};

exports.get_users = function (req, res, next) {
    let response = {
        count: users.length,
        users: users
    };
    res.status(200).send({ success: true, data: response });
};
