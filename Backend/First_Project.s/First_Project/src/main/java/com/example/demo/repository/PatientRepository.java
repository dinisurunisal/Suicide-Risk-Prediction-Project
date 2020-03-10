package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Patient;

@Repository
public interface PatientRepository extends MongoRepository <Patient,String>{
    public Patient findByNIC(String NIC);
}