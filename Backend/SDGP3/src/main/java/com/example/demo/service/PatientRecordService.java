package com.example.demo.service;

import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
@Service
public class PatientRecordService {

    @Autowired
    private PatientRecordRepository patientRecordRepo;

    //create record
    public PatientRecord create(String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated){
        return patientRecordRepo.save(new PatientRecord( NIC,recNum,name,age,gender,phoneNumber,day,month,year,religion,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated));
    }

    //delete record
    public void deleteByRecNum(String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated){
        PatientRecord patientRecord=patientRecordRepo.findByRecNum(recNum);
        patientRecordRepo.delete(patientRecord);
    }

    public void deleteByNIC(String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated){
        PatientRecord patientRecord =patientRecordRepo.findByNIC(NIC);
        patientRecordRepo.delete(patientRecord);
    }
}
