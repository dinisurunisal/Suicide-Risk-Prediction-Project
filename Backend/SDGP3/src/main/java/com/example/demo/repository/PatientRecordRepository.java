package com.example.demo.repository;

import com.example.demo.model.PatientRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRecordRepository extends MongoRepository<PatientRecord,String> {
    public PatientRecord findByNIC(String NIC);
    public PatientRecord findByRecNum(int recNum);
    public PatientRecord findByMonth(int month);
    public PatientRecord findByYear(int year);
    public PatientRecord findByDay(int day);



}

