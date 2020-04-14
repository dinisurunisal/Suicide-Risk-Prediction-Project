package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Doctor extends Person{


    String doctorLicenceId;
    String currentCity;
    String currentHospital;
    private String email;
    private String password;
    private String confirmPassword;

    //constructer
    public Doctor(int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital, String doctorLicenceId, String email, String password, String confirmPassword) {
        super(age, gender, name, phoneNumber);
        this.currentCity = currentCity;
        this.currentHospital = currentHospital;
        this.doctorLicenceId = doctorLicenceId;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public Doctor(String doctorLicenceId, int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital, String email) {
        super(age, gender, name, phoneNumber);
        this.doctorLicenceId = doctorLicenceId;
        this.currentCity = currentCity;
        this.currentHospital = currentHospital;
        this.email = email;
    }

    //getters and setters




    public String getCurrentCity() {
        return currentCity;
    }

    public void setCurrentCity(String currentCity) {
        this.currentCity = currentCity;
    }


    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCurrentHospital() {
        return currentHospital;
    }

    public void setCurrentHospital(String currentHospital) {
        this.currentHospital = currentHospital;
    }

    public String getDoctorLicenceId() {
        return doctorLicenceId;
    }

    public void setDoctorLicenceId(String doctorLicenceId) {
        this.doctorLicenceId = doctorLicenceId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
