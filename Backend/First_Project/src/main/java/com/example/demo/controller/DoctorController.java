package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.service.DoctorService;
import com.example.demo.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    //create a doctor account
    @RequestMapping("/create")
    public String create(@RequestParam String NIC) {
        Doctor doctor = doctorService.create(NIC);
        return doctor.toString();
    }

    //get all doctor accounts
    @RequestMapping("/getAll")
    public List<Doctor> getAll(){
        return doctorService.getAll();
    }

    //update a doctor account
    @RequestMapping("/update")
    public String update(@RequestParam String NIC, @RequestParam String name,@RequestParam int phoneNumber,@RequestParam String currentHospital,@RequestParam String currentCity,@RequestParam String email) {
        Doctor doctor = doctorService.update(NIC, name, phoneNumber, currentHospital, currentCity, email);
        return doctor.toString();
    }

    //delete a doctor account
    @RequestMapping("/delete")
    public String delete(@RequestParam String NIC) {
        doctorService.delete(NIC);
        return"Deleted "+NIC;
    }

    //delete all doctor accounts
    @RequestMapping("/deleteAll")
    public String deleteAll() {
        doctorService.deleteAll();
        return "Deleted all records";
    }
}
