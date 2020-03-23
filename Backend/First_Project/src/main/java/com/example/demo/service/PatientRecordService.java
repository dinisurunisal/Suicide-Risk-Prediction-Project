package com.example.demo.service;

import com.example.demo.model.Patient;
import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientRecordService {
    @Autowired
    private PatientRecordRepository patientRecordRepository;
/*
    //create a patient account
    public PatientRecord create(String NIC,
                                int age,
                                String gender,
                                String religion,
                                String occupation,
                                String civilStatus,
                                String educationalLevel,
                                boolean pastSuicideAttempts,
                                boolean anySuicidalThoughtsMentioned,
                                boolean selfInjuriousBehaviour,
                                String pastIllness,
                                String alchoholConsumption,
                                boolean anger,
                                boolean sleepProblem) {
        return patientRecordRepository.save(
                new PatientRecord(  NIC, age,gender, religion, occupation, civilStatus, educationalLevel,
                pastSuicideAttempts, anySuicidalThoughtsMentioned, selfInjuriousBehaviour, pastIllness, alchoholConsumption, anger, sleepProblem));

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


    //Retrieve all patient accounts
    public List<Patient> getAll(){
        return patientRepo.findAll();
    }

    //Retrieve one patient account
    public Patient getByNIC(String NIC) {
        return patientRepo.findByNIC(NIC);
    }
*/

}
