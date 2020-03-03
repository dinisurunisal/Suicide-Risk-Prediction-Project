package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "PatientRecords")
public class PatientRecord extends Patient{

    //to get the suicide risk of a patient we need to get these information
    private int day;
    private int month;
    private int year;
    private int age;
    private char gender;
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
    private String alchoholConsumption;
    private boolean anger;
    private boolean sleepProblem;
    private boolean socialIsolation;
    private boolean sad;
    private boolean humilated;


    //constructor
    public PatientRecord(String nIC, int age, char gender, String religion, String race, String occupation,
                         String civilStatus, String educationalLevel, String reason, boolean lifeTimePsychiatricHospitalizations,
                         boolean pastSuicideAttempts, boolean anySuicidalThoughts, boolean selfInjuriousBehaviour,
                         String psychiatricDisorders, boolean pastIllness, String alchoholConsumption, boolean anger,
                         boolean sleepProblem, boolean socialIsolation, boolean sad, boolean humilated) {
        super(nIC);
        this.age = age;
        this.gender = gender;
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
        this.alchoholConsumption = alchoholConsumption;
        this.anger = anger;
        this.sleepProblem = sleepProblem;
        this.socialIsolation = socialIsolation;
        this.sad = sad;
        this.humilated = humilated;
    }

    //constructor
    public PatientRecord(String nIC) {
        super(nIC);
        // TODO Auto-generated constructor stub
    }

    //getters and setters
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public char getGender() {
        return gender;
    }
    public void setGender(char gender) {
        this.gender = gender;
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
    public String getAlchoholConsumption() {
        return alchoholConsumption;
    }
    public void setAlchoholConsumption(String alchoholConsumption) {
        this.alchoholConsumption = alchoholConsumption;
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
    public boolean isHumilated() {
        return humilated;
    }
    public void setHumilated(boolean humilated) {
        this.humilated = humilated;
    }







}
