package com.example.demo.repository;

import com.example.demo.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends MongoRepository<Patient ,String> {
    public Patient findByNIC(String NIC);
}
