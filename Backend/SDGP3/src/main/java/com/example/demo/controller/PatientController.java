package com.example.demo.controller;

import com.example.demo.model.Patient;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PatientController {
    @Autowired
    private PatientService patientService;

    @RequestMapping("/createp")
    public String create(@RequestParam int age, @RequestParam char gender, @RequestParam String name, @RequestParam int phoneNumber, @RequestParam String NIC) {
        Patient p = patientService.create(age,gender,name,phoneNumber,NIC);
        return p.toString();
    }

    @RequestMapping("/getp")
    public Patient getPatients(@RequestParam String NIC) {
        return patientService.getByNIC(NIC);
    }

    @RequestMapping("/getAllp")
    public List<Patient> getAll(){
        return patientService.getAll();
    }

    @RequestMapping("/updateP")
    public String update(@RequestParam String NIC,@RequestParam String name,@RequestParam int age,@RequestParam  char gender,@RequestParam int phoneNumber) {
        Patient p = patientService.update(NIC,name,age,gender,phoneNumber);
        return p.toString();
    }

    @RequestMapping("/deletep")
    public String delete(@RequestParam String NIC) {
        patientService.delete(NIC);
        return"Deleted "+NIC;
    }

    @RequestMapping("/deleteAllp")
    public String deleteAll() {
        patientService.deleteAll();
        return "Deleted all records";
    }


}
