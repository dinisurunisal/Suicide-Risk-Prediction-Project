package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Person {

    @Id
    String id;
    int age; //age
    char gender;//gender
    String name;
    int phoneNumber;

    public Person(int age, char gender, String name, int phoneNumber) {
        this.age = age;
        this.gender = gender;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Person{" +
                "age=" + age +
                ", gender=" + gender +
                ", name='" + name + '\'' +
                ", phoneNumber=" + phoneNumber +
                '}';
    }
}
