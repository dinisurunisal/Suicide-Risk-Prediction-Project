package com.example.demo.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Patient;
import com.example.demo.model.Person;
import com.example.demo.repository.PatientRepository;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepo;

    //create a patient account
    public Patient create(String NIC) {
        return patientRepo.save(new Patient(NIC));
    }

    //delete a patient account
    public void delete(String NIC) {
        Patient patient = patientRepo.findByNIC(NIC);
        patientRepo.delete(patient);
    }

    //delete all patient accounts
    public void deleteAll() {
        patientRepo.deleteAll();
    }

    //update patient account
    public Patient update(String NIC) {
        Patient patient = patientRepo.findByNIC(NIC);
        patient.setNIC(NIC);
        return patientRepo.save(patient);
    }

    //Retrieve all patient records
    public List<Patient> getAll(){
        return patientRepo.findAll();
    }

    //Retrieve one record
    public Patient getByNIC(String NIC) {
        return patientRepo.findByNIC(NIC);
    }

}