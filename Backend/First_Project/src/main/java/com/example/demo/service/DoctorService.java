package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Doctor;
import com.example.demo.model.Patient;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    //create a Doctor account
    public Doctor create(String NIC) {
        return doctorRepository.save(new Doctor(NIC));
    }

    //delete a doctor account
    public void delete(String NIC) {
        Doctor doctor = doctorRepository.findByNIC(NIC);
        doctorRepository.delete(doctor);
    }

    //delete all doctor accounts
    public void deleteAll() {
        doctorRepository.deleteAll();
    }

    //update doctor account
    public Doctor update(String NIC,String name,int phoneNumber, String currentHospital,String currentCity,String email) {
        Doctor doctor = doctorRepository.findByNIC(NIC);
        doctor.setName(name);
        doctor.setPhoneNumber(phoneNumber);
        doctor.setCurrentHospital(currentHospital);
        doctor.setCurrentCity(currentCity);
        return doctorRepository.save(doctor);
    }

    //Retrieve all Doctor accounts
    public List<Doctor> getAll(){
        return doctorRepository.findAll();
    }
}
