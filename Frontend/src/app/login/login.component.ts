import { Component, OnInit } from '@angular/core';
import {FormControl , Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    passwordToLog= new FormControl();
    emailToLog = new FormControl ('', [
      Validators.required,
      Validators.email,
    ]);

  constructor(private url1:HttpClient) { }

  ngOnInit() {
  }
  login(){
    var logPassword = this.passwordToLog.value;
    var logEmail = this.emailToLog.value;
    //api tikai data tikai wada krnne nattam mee kaalla dala ghnna
   // alert(logEmail);
    //alert(logPassword);

    let logParameter = new HttpParams({
      fromObject:{
        "mail":logEmail,
        "password":logPassword
      }
    });
    var url ='http://ec2-18-221-114-73.us-east-2.compute.amazonaws.com:8080/api/login';
    this.url1.post<any>(url,logParameter).subscribe(
      data =>{
        if(data['auth']){
          alert("You're Login Successfully");
        
        }else{
          alert("Loging is un-successfully");
        }

      }
    )

  }

}
