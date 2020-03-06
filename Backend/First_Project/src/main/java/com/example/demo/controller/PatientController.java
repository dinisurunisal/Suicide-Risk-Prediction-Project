package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Patient;
import com.example.demo.model.Person;
import com.example.demo.service.PatientService;

@RestController
public class PatientController {
    @Autowired
    private PatientService patientServices;

    //create a patient account
    @RequestMapping("/create")
    public String create(@RequestParam String NIC) {
        Patient p = patientServices.create(NIC);
        return p.toString();
    }

    //get a patient account
    @RequestMapping("/get")
    public Patient getPatients(@RequestParam String NIC) {
        return patientServices.getByNIC(NIC);
    }

    //get all patient accounts
    @RequestMapping("/getAll")
    public List<Patient>getAll(){
        return patientServices.getAll();
    }

    //update a patient account
    @RequestMapping("/update")
    public String update(@RequestParam String NIC) {
        Patient p = patientServices.update(NIC);
        return p.toString();
    }

    //delete a patient account
    @RequestMapping("/delete")
    public String delete(@RequestParam String NIC) {
        patientServices.delete(NIC);
        return"Deleted "+NIC;
    }

    //delete all patient accounts
    @RequestMapping("/deleteAll")
    public String deleteAll() {
        patientServices.deleteAll();
        return "Deleted all records";
    }
}