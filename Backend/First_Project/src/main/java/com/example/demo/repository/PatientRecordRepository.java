package com.example.demo.repository;

import com.example.demo.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRecordRepository  extends MongoRepository<PatientRecordRepository,String> {
    public Doctor findByNIC(String NIC);
}
