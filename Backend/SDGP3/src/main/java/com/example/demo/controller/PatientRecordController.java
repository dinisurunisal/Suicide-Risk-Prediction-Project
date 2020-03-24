package com.example.demo.controller;

import com.example.demo.model.PatientRecord;
import com.example.demo.service.PatientRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class PatientRecordController {

    @Autowired
    private PatientRecordService recordService;

    @RequestMapping("/create")
    public String create(@RequestParam String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated) {
        PatientRecord r = recordService.create(NIC,recNum,name,age,gender,phoneNumber,day,month,year,religion,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated);
        return r.toString();
    }

    @RequestMapping("/deleteByRecNum")
    public String deleteByRecNum(@RequestParam String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated){
        recordService.deleteByRecNum(NIC,recNum,name,age,gender,phoneNumber,day,month,year,religion,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated);
        return"Deleted "+recNum;
    }

    @RequestMapping("/deleteByNIC")
    public String deleteByNIC(@RequestParam String NIC, int recNum, String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated){
        recordService.deleteByRecNum(NIC,recNum,name,age,gender,phoneNumber,day,month,year,religion,race,occupation,civilStatus,educationalLevel,reason,lifeTimePsychiatricHospitalizations,pastSuicideAttempts,anySuicidalThoughts,selfInjuriousBehaviour,psychiatricDisorders,pastIllness,alcoholConsumption,anger,sleepProblem,socialIsolation,sad,humiliated);
        return"Deleted "+NIC;
    }
}
