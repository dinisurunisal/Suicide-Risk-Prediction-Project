package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    //create a patient account
    public Patient create(int age, char gender, String name, int phoneNumber, String NIC) {
        return patientRepository.save(new Patient(age,gender,name,phoneNumber,NIC));
    }
}
