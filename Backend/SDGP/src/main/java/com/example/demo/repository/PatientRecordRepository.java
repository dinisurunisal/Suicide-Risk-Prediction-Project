package com.example.demo.repository;

import com.example.demo.model.PatientRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRecordRepository extends MongoRepository<PatientRecord,String> {
    public PatientRecord findByMonth(int month);
    public PatientRecord findByYear(int year);
    public PatientRecord findByDay(int day);
    public PatientRecord findByMY(int year,int month);
    public PatientRecord findByMD(int month,int day);


}

