import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  nameToReg = new FormControl();
  passwordToReg = new FormControl();
  emailToReg = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

//register ek seccussfull nan data tika pass krnn 
  constructor(private url:HttpClient, public router:Router) { }

  ngOnInit() {
  }

  register(){
    var regName =this.nameToReg.value;
    var regEmail= this.emailToReg.value;
    var regPassword = this.passwordToReg.value;

    let regParameter = new HttpParams({
      fromObject:{
        "name":regName,
        "mail":regEmail,
        "password":regPassword

      }
    });
    var request ='http://ec2-18-221-114-73.us-east-2.compute.amazonaws.com:8080/api/reg?name&mail&password'

    this.url.post<any>(request,regParameter).subscribe(
      data =>{
        alert("You're Succesfully Registered")
        this.router.navigate(
          ["/login"]
        );
      }
    )
  }

}

