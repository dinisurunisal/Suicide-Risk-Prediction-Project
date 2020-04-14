package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.Doctor;
import com.example.demo.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Patient;
import com.example.demo.model.Person;
import com.example.demo.service.PatientService;



@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;



    @RequestMapping("/created")
    public String create(@RequestParam String doctorLicenceId,int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital,  String email) {
        Doctor d =  doctorService.create(doctorLicenceId,age,gender,name,currentCity,phoneNumber,currentHospital,email);
        return d.toString();
    }



    @RequestMapping("/updated")
    public String update(@RequestParam String doctorLicenceId,int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital,  String email) {
        Doctor d = doctorService.update(doctorLicenceId,age,gender,name,currentCity,phoneNumber,currentHospital,email);
        return d.toString();
    }

    @RequestMapping("/deleted")
    public String delete(@RequestParam String doctorLicenceId) {
        doctorService.delete(doctorLicenceId);
        return"Deleted "+doctorLicenceId;
    }


}
