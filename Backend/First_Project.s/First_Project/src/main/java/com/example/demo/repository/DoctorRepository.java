package com.example.demo.repository;

import com.example.demo.model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor,String> {
    public Doctor findByNIC(String NIC);
}
