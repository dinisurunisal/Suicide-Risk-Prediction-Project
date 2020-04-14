package com.example.demo.service;

import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
@Service
public class DoctorService {
    @Autowired
    private DoctorRepository docRepo;

    //Create doctor account
    public Doctor create(String doctorLicenceId,int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital,  String email){
        return docRepo.save(new Doctor(doctorLicenceId,age,gender,name,currentCity,phoneNumber,currentHospital,email));
    }

    //delete a doctor account
    public void delete(String doctorLicenceId ) {
        Doctor doctor = docRepo.findByDoctorLicenceId(doctorLicenceId );
        docRepo.delete(doctor);
    }

    //update patient account
    public Doctor update(String doctorLicenceId,int age, char gender, String name, String currentCity, int phoneNumber, String currentHospital,  String email) {
        Doctor doctor = docRepo.findByDoctorLicenceId(doctorLicenceId);
        doctor.setDoctorLicenceId(doctorLicenceId);
        doctor.setAge(age);
        doctor.setGender(gender);
        doctor.setName(name);
        doctor.setCurrentCity(currentCity);
        doctor.setPhoneNumber(phoneNumber);
        doctor.setCurrentHospital(currentHospital);
        doctor.setEmail(email);
        return docRepo.save(doctor);
    }


}
