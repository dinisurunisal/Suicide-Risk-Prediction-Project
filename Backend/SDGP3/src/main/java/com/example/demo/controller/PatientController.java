package com.example.demo.controller;

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {
    @Autowired
    private PatientService patientService;

    @RequestMapping("/create")
    public String create(@RequestParam int age, @RequestParam char gender, @RequestParam String name, @RequestParam int phoneNumber, @RequestParam String NIC) {
        Patient p = patientService.create(age,gender,name,phoneNumber,NIC);
        return p.toString();
    }
}
