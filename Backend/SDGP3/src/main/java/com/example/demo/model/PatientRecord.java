package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "PatientRecords")
public class PatientRecord extends Patient{

    //to get the suicide risk of a patient we need to get these information
    private int recNum;
    private Date day;
    private Date month;
    private Date year;
    private String religion;
    private String race;
    private String occupation;				//occupation of the patient
    private String civilStatus;		// relationship status, married unmarried divorced
    private String educationalLevel;
    private String reason;
    private boolean lifeTimePsychiatricHospitalizations;
    private boolean pastSuicideAttempts;
    private boolean anySuicidalThoughts;
    private boolean selfInjuriousBehaviour;
    private String psychiatricDisorders;
    private boolean pastIllness;
    private String alcoholConsumption;
    private boolean anger;
    private boolean sleepProblem;
    private boolean socialIsolation;
    private boolean sad;
    private boolean humiliated;

    //constructer

    public PatientRecord(String NIC,int recNum,String name, int age, char gender, int phoneNumber, Date day, Date month, Date year, String religion, String race, String occupation, String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations, boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour, String psychiatricDisorders, boolean pastIllness, String alcoholConsumption, boolean anger, boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humiliated) {
        super(age, gender, name, phoneNumber,NIC);
        this.recNum=recNum;
        this.day = day;
        this.month = month;
        this.year = year;
        this.religion = religion;
        this.race = race;
        this.occupation = occupation;
        this.civilStatus = civilStatus;
        this.educationalLevel = educationalLevel;
        this.reason = reason;
        this.lifeTimePsychiatricHospitalizations = lifeTimePsychiatricHospitalizations;
        this.pastSuicideAttempts = pastSuicideAttempts;
        this.anySuicidalThoughts = anySuicidalThoughts;
        this.selfInjuriousBehaviour = selfInjuriousBehaviour;
        this.psychiatricDisorders = psychiatricDisorders;
        this.pastIllness = pastIllness;
        this.alcoholConsumption = alcoholConsumption;
        this.anger = anger;
        this.sleepProblem = sleepProblem;
        this.socialIsolation = socialIsolation;
        this.sad = sad;
        this.humiliated = humiliated;
    }


    //getters and setters


    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    public Date getMonth() {
        return month;
    }

    public void setMonth(Date month) {
        this.month = month;
    }

    public Date getYear() {
        return year;
    }

    public void setYear(Date year) {
        this.year = year;
    }



    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getCivilStatus() {
        return civilStatus;
    }

    public void setCivilStatus(String civilStatus) {
        this.civilStatus = civilStatus;
    }

    public String getEducationalLevel() {
        return educationalLevel;
    }

    public void setEducationalLevel(String educationalLevel) {
        this.educationalLevel = educationalLevel;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public boolean isLifeTimePsychiatricHospitalizations() {
        return lifeTimePsychiatricHospitalizations;
    }

    public void setLifeTimePsychiatricHospitalizations(boolean lifeTimePsychiatricHospitalizations) {
        this.lifeTimePsychiatricHospitalizations = lifeTimePsychiatricHospitalizations;
    }

    public boolean isPastSuicideAttempts() {
        return pastSuicideAttempts;
    }

    public void setPastSuicideAttempts(boolean pastSuicideAttempts) {
        this.pastSuicideAttempts = pastSuicideAttempts;
    }

    public boolean isAnySuicidalThoughts() {
        return anySuicidalThoughts;
    }

    public void setAnySuicidalThoughts(boolean anySuicidalThoughts) {
        this.anySuicidalThoughts = anySuicidalThoughts;
    }

    public boolean isSelfInjuriousBehaviour() {
        return selfInjuriousBehaviour;
    }

    public void setSelfInjuriousBehaviour(boolean selfInjuriousBehaviour) {
        this.selfInjuriousBehaviour = selfInjuriousBehaviour;
    }

    public String getPsychiatricDisorders() {
        return psychiatricDisorders;
    }

    public void setPsychiatricDisorders(String psychiatricDisorders) {
        this.psychiatricDisorders = psychiatricDisorders;
    }

    public boolean isPastIllness() {
        return pastIllness;
    }

    public void setPastIllness(boolean pastIllness) {
        this.pastIllness = pastIllness;
    }

    public String getAlcoholConsumption() {
        return alcoholConsumption;
    }

    public void setAlcoholConsumption(String alcoholConsumption) {
        this.alcoholConsumption = alcoholConsumption;
    }

    public boolean isAnger() {
        return anger;
    }

    public void setAnger(boolean anger) {
        this.anger = anger;
    }

    public boolean isSleepProblem() {
        return sleepProblem;
    }

    public void setSleepProblem(boolean sleepProblem) {
        this.sleepProblem = sleepProblem;
    }

    public boolean isSocialIsolation() {
        return socialIsolation;
    }

    public void setSocialIsolation(boolean socialIsolation) {
        this.socialIsolation = socialIsolation;
    }

    public boolean isSad() {
        return sad;
    }

    public void setSad(boolean sad) {
        this.sad = sad;
    }

    public boolean isHumiliated() {
        return humiliated;
    }

    public void setHumiliated(boolean humiliated) {
        this.humiliated = humiliated;
    }

    public int getRecNum() {
        return recNum;
    }

    public void setRecNum(int docNum) {
        this.recNum = docNum;
    }
}
