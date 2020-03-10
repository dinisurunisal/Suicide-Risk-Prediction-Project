package com.example.demo.model;

public class PatientRecord extends Patient{
    private int age;
    private String gender;
    private String religion;
    private String occupation;
    private String civilStatus;
    private String educationalLevel;
    private boolean pastSuicideAttempts;
    private boolean anySuicidalThoughtsMentioned;
    private boolean selfInjuriousBehaviour;
    private String pastIllness;
    private String alchoholConsumption;
    private boolean anger;
    private boolean sleepProblem;

    //constructors
    public PatientRecord(String NIC) {
        super(NIC);
    }

    public PatientRecord(String NIC, int age, String gender, String religion, String occupation, String civilStatus, String educationalLevel, boolean pastSuicideAttempts, boolean anySuicidalThoughtsMentioned, boolean selfInjuriousBehaviour, String pastIllness, String alchoholConsumption, boolean anger, boolean sleepProblem) {
        super(NIC);
        this.age = age;
        this.gender = gender;
        this.religion = religion;
        this.occupation = occupation;
        this.civilStatus = civilStatus;
        this.educationalLevel = educationalLevel;
        this.pastSuicideAttempts = pastSuicideAttempts;
        this.anySuicidalThoughtsMentioned = anySuicidalThoughtsMentioned;
        this.selfInjuriousBehaviour = selfInjuriousBehaviour;
        this.pastIllness = pastIllness;
        this.alchoholConsumption = alchoholConsumption;
        this.anger = anger;
        this.sleepProblem = sleepProblem;
    }

    //getters and setters
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getReligion() {
        return religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
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

    public boolean isPastSuicideAttempts() {
        return pastSuicideAttempts;
    }

    public void setPastSuicideAttempts(boolean pastSuicideAttempts) {
        this.pastSuicideAttempts = pastSuicideAttempts;
    }

    public boolean isAnySuicidalThoughtsMentioned() {
        return anySuicidalThoughtsMentioned;
    }

    public void setAnySuicidalThoughtsMentioned(boolean anySuicidalThoughtsMentioned) {
        this.anySuicidalThoughtsMentioned = anySuicidalThoughtsMentioned;
    }

    public boolean isSelfInjuriousBehaviour() {
        return selfInjuriousBehaviour;
    }

    public void setSelfInjuriousBehaviour(boolean selfInjuriousBehaviour) {
        this.selfInjuriousBehaviour = selfInjuriousBehaviour;
    }

    public String getPastIllness() {
        return pastIllness;
    }

    public void setPastIllness(String pastIllness) {
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
}
