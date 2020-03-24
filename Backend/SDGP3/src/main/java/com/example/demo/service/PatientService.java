package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    //create a patient account
    public Patient create(int age, char gender, String name, int phoneNumber, String NIC) {
        return patientRepository.save(new Patient(age,gender,name,phoneNumber,NIC));
    }

    //delete a patient account
    public void delete(String NIC) {
        Patient patient = patientRepository.findByNIC(NIC);
        patientRepository.delete(patient);
    }

    //delete all patient accounts
    public void deleteAll() {
        patientRepository.deleteAll();
    }

    //update patient account
    public Patient update(String NIC, String name, int age, char gender, int phoneNumber) {
        Patient patient = patientRepository.findByNIC(NIC);
        patient.setNIC(NIC);
        patient.setName(name);
        patient.setAge(age);
        patient.setGender(gender);
        patient.setPhoneNumber(phoneNumber);
        return patientRepository.save(patient);
    }

    //Retrieve all patient records
    public List<Patient> getAll(){
        return patientRepository.findAll();
    }

    //Retrieve one record
    public Patient getByNIC(String NIC) {
        return patientRepository.findByNIC(NIC);
    }

}
