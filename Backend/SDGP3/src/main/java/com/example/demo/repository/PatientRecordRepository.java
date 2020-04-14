package com.example.demo.repository;

import com.example.demo.model.PatientRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface PatientRecordRepository extends MongoRepository<PatientRecord,String> {
    public PatientRecord findByNIC(String NIC);
    public PatientRecord findByRecNum(int recNum);
    public PatientRecord findByMonth(Date month);
    public PatientRecord findByYear(Date year);
    public PatientRecord findByDay(Date day);



}

