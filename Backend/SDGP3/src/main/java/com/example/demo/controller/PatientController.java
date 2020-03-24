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

    @RequestMapping("/create")
    public String create(@RequestParam int age, @RequestParam char gender, @RequestParam String name, @RequestParam int phoneNumber, @RequestParam String NIC) {
        Patient p = patientService.create(age,gender,name,phoneNumber,NIC);
        return p.toString();
    }

    @RequestMapping("/get")
    public Patient getPatients(@RequestParam String NIC) {
        return patientService.getByNIC(NIC);
    }

    @RequestMapping("/getAll")
    public List<Patient> getAll(){
        return patientService.getAll();
    }

    @RequestMapping("/update")
    public String update(@RequestParam String NIC,@RequestParam String name,@RequestParam int age,@RequestParam  char gender,@RequestParam int phoneNumber) {
        Patient p = patientService.update(NIC,name,age,gender,phoneNumber);
        return p.toString();
    }

    @RequestMapping("/delete")
    public String delete(@RequestParam String NIC) {
        patientService.delete(NIC);
        return"Deleted "+NIC;
    }

    @RequestMapping("/deleteAll")
    public String deleteAll() {
        patientService.deleteAll();
        return "Deleted all records";
    }


}
