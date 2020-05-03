import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.scss'],
})
export class DocHomeComponent implements OnInit {
  patients = [];
  tempPatients = [];
  searchKeyword = '';
  NIC = '';
  patientId = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private userService: UserService) {

  }

  ngOnInit() {
    this.getAllPatients();
  }
  // searchPatients(ev: any) {
  //   this.patients = [];
  //   for (let i = 0; i < this.tempPatients.length; i++) {
  //     if (this.tempPatients[i]['NIC'].includes(this.searchKeyword)) {
  //       this.patients.push(this.tempPatients[i]);
  //     }
  //   }
  //   if (this.searchKeyword && this.searchKeyword.trim() == '') {
  //     this.patients = this.tempPatients;
  //   }
  // }


  searchPatients(ev: any) {
    this.patients = [];
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.patients = this.patients.filter((patient) => {
        console.log(patient);
        for (let i = 0; i < this.tempPatients.length; i++) {
          if (this.tempPatients[i]['NIC'].includes(val)) {
            this.patients.push(this.tempPatients[i]);
          }
        }
      });
    }
    else {
      this.patients = this.tempPatients;
    }
  }

  async getAllPatients() {
    let docID = this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"];
    this.patients = [];
    this.tempPatients = [];
    if (docID != null) {
      this.userService.getAllPatients(docID).subscribe(success => {
        if (success['rows'].length > 0) {
          for (let i = 0; i < success['rows'].length; i++) {
            this.patients.push(success['rows'][i]);
            this.tempPatients.push(success['rows'][i]);
          }
          console.log(this.patients);
        }
      }, error => {
        console.log(error);
      });
    } else {
      console.log("Error in Session please log in again");
      this.router.navigate(['./signin']);
    }

  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getPatientRecord(patientID, NIC) {
    this.router.navigate(['./patientHome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], patient_id: patientID, NIC: NIC } });
  }


  //adding a patient
  addpatient() {
    if (this.NIC.trim().length == 10) {
      let docID = this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"];
      if (docID != null) {
        this.userService.addPatient(docID, this.NIC).subscribe(success => {
          this.NIC = '';
          this.getAllPatients();
        }, error => {
          this.presentToast('Already Exists', 2000);
          console.log(error);
        });
      } else {
        console.log("Error in Session please log in again");
        this.router.navigate(['./signin']);
      }
    } else {
      this.presentToast('Invalid NIC number', 2000);
    }
  }

  //delete patient
  async presentConfirm(patientID) {
    let alert = await this.alertCtrl.create({
      header: 'Delete Patient',
      message: 'Do you want to delete this patient?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.userService.deletePatient(patientID).subscribe(success => {
              this.NIC = '';
              this.getAllPatients();
            }, error => {
              this.presentToast('Can not delete', 2000);
              console.log(error);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  //logging out
  async logout() {
    let alert = await this.alertCtrl.create({
      header: 'Log Out',
      message: 'Do you want to Log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            localStorage.clear();
            this.router.navigate(['./signin']);
          }
        }
      ]
    });
    await alert.present();

  }
  async presentToast(msg, dur) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast.onDidDismiss();
  }
}
