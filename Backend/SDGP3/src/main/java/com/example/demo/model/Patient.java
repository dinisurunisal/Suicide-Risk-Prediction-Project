package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Patient extends Person {



    String NIC;

    public Patient(int age, char gender, String name, int phoneNumber, String NIC) {
        super(age, gender, name, phoneNumber);
        this.NIC = NIC;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "NIC='" + NIC + '\'' +
                '}';
    }
}
