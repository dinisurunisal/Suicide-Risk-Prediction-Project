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
/*
  this.currentCity = currentCity;
        this.phoneNumber = phoneNumber;
        this.currentHospital = currentHospital;
        this.doctorLicenceId = doctorLicenceId;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
 */
    //update doctor account
    public Doctor update(String name,String phoneNumber, String currentHospital,String email) {
        //Doctor doctor = doctorRepository.findByNIC(NIC);
        Doctor doctor;
        doctor.setName(name);
        return doctorRepository.save(doctor);
    }

    //Retrieve all Doctor accounts
    public List<Doctor> getAll(){
        return doctorRepository.findAll();
    }


}
