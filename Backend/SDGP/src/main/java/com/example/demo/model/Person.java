package com.example.demo.model;

import org.springframework.data.annotation.Id;


public class Person {
    //Attributes
    @Id
    private String NIC;	//national Id
    private int age;	//age

    //Constructor
    public Person(String nIC, int age) {
        super();
        NIC = nIC;
        this.age = age;
    }

    //Getters and Setters
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getNIC() {
        return NIC;
    }
    public void setNIC(String nIC) {
        NIC = nIC;
    }






}
