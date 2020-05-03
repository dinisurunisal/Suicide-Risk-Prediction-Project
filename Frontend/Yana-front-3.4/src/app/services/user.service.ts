import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  public login(email, password) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/user/login', { 'email': email, 'password': password }).pipe(map(res => res));
  }

  public register(email, NIC, firstname, phonenumber, address, password) {
    return this.http.post('http://localhost:8080/user/register',
      // tslint:disable-next-line:object-literal-key-quotes
      { 'NIC': NIC, 'email': email, 'firstname': firstname, 'phonenumber': phonenumber, 'address': address, 'password': password }).pipe(map(res => res));
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  public forgetPassword(email) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/user/forgetpassword', { 'email': email }).pipe(map(res => res));
  }

  public forgetPasswordTokenSending(email, token) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/user/forgetpassword/token', { 'email': email, 'token': token }).pipe(map(res => res));
  }

  public forgotNewPassword(email, password) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/user/forgetpassword/changepassword', { 'email': email, 'password': password }).pipe(map(res => res));
  }



  public getAllPatients(id) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.get('http://localhost:8080/patient/allPatients/' + id, { headers: this.headers }).pipe(map(res => res));
  }

  public getPatientRecords(docId, patientId) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/patientRecords/allRecordsOfAPatient/', { 'doc_id': docId, 'patient_id': patientId }, { headers: this.headers }).pipe(map(res => res));
  }

  public getPatientRecordsDetails(recordID) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.get('http://localhost:8080/patientRecords/oneRecord/' + recordID, { headers: this.headers }).pipe(map(res => res));
  }

  public addPatient(docId, NIC) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/patient/addPatient', { 'doc_id': docId, 'NIC': NIC }, { headers: this.headers }).pipe(map(res => res));
  }

  public deletePatient(patientId) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.delete('http://localhost:8080/patient/delete/' + patientId, { headers: this.headers }).pipe(map(res => res));
  }

  public addPatientRecord(
    NIC,
    Age,
    Religion,
    Race,
    Gender,
    Nature_Of_Occupation,
    Civil_Status,
    Education_Level,
    Reason,
    Lifetime_Psychiatric_Hospitalizations,
    Past_Suicide_Attempts,
    Any_suicidal_thoughts_mentioned,
    Self_Injurious_Behaviour,
    Psychiatric_Disorders,
    Past_Illnesses,
    Alcohol_drug_Consumption,
    Anger,
    Sleep_Problem,
    Social_Iscolation,
    Sad_Weary,
    Humilated,
    patientId,
    docId
  ) {

    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post('http://localhost:8080/patientRecords/addPatientRecord', {
      'NIC': NIC,
      'Age': Age,
      'Religon': Religion,
      'Race': Race,
      'Gender': Gender,
      'Nature_Of_Occupation': Nature_Of_Occupation,
      'Civil_Status': Civil_Status,
      'Education_Level': Education_Level,
      'Reason': Reason,
      'Lifetime_Psychiatric_Hospitalizations': Lifetime_Psychiatric_Hospitalizations,
      'Past_Suicide_Attempts': Past_Suicide_Attempts,
      'Any_suicidal_thoughts_mentioned': Any_suicidal_thoughts_mentioned,
      'Self_Injurious_Behaviour': Self_Injurious_Behaviour,
      'Psychiatric_Disorders': Psychiatric_Disorders,
      'Past_Illnesses': Past_Illnesses,
      'Alcohol_drug_Consumption': Alcohol_drug_Consumption,
      'Anger': Anger,
      'Sleep_Problem': Sleep_Problem,
      'Social_Iscolation': Social_Iscolation,
      'Sad_Weary': Sad_Weary,
      'Humilated': Humilated,
      'ID': docId,
      'patientId': patientId
    }, { headers: this.headers }).pipe(map(res => res));
  }

  public deletePatientRecord(recordId) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.delete('http://localhost:8080/patientRecords/deleteOneRecord/' + recordId, { headers: this.headers }).pipe(map(res => res));
  }

  public getResult() {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.get('http://localhost:8080/patientRecords/result/', { headers: this.headers }).pipe(map(res => res));
  }

}
