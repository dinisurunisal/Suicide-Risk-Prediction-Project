package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Patient{

    //each patient account is made by using the NIC
    @Id
    String id;
    String NIC;	//we are going to identify each patient using the NIC only

    //constructor
    public Patient(String NIC) {
        super();
        this.NIC = NIC;
    }

    //getters and setters
    public String getNIC() {
        return NIC;
    }
    public void setNIC(String nIC) {
        NIC = nIC;
    }

    public String toString() {
        return "Patient NIC: "+ NIC;
    }

    // as we talking only patients ID number we only need that
    //no names, no living area etc
}
