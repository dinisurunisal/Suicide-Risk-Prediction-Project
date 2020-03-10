package com.example.demo.model;

public class Doctor extends Person{

    private String name;
    private String currentCity;
    private int phoneNumber;
    private String currentHospital;
    private String doctorLicenceId;
    private String email;
    private String password;
    private String confirmPassword;

    //constructors
    public Doctor(String NIC) {
        super(NIC);
    }

    public Doctor(String NIC, String name, String currentCity, int phoneNumber, String currentHospital, String doctorLicenceId, String email, String password, String confirmPassword) {
        super(NIC);
        this.name = name;
        this.currentCity = currentCity;
        this.phoneNumber = phoneNumber;
        this.currentHospital = currentHospital;
        this.doctorLicenceId = doctorLicenceId;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    //getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCurrentCity() {
        return currentCity;
    }

    public void setCurrentCity(String currentCity) {
        this.currentCity = currentCity;
    }

    public int getPhoneNumber() {
        return phoneNumber;
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
}
