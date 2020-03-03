package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Doctors")
public class Doctor{

    public Doctor() {
        super();
        // TODO Auto-generated constructor stub
    }
    private String firstName;
    private String lastName;
    private String email;
    private int phoneNumber;
    private String NIC;



    public Doctor(String firstName, String lastName, String email, int phoneNumber, String nIC) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        NIC = nIC;
    }

    //getters and setters
    public String getNIC() {
        return NIC;
    }

    public void setNIC(String nIC) {
        NIC = nIC;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String toString() {
        return "Person First Name : "+ firstName + " Last Name : "+ lastName + "Phone Number :"+phoneNumber+"Email :"+email+ "NIC :" + NIC;
    }


}
