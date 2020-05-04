import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.scss'],
})
export class PatientHomeComponent implements OnInit {
  docId;
  patientId;
  recordId;
  patientRecords = [];
  NIC;
  searchKeyword = '';
  isSearchBarOpened = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private userService: UserService) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        console.log(data.doc_id);
        this.docId = data.doc_id;
        this.patientId = data.patient_id;
        this.NIC = data.NIC;
      } else {
        this.docId = null;
        this.patientId = null;
        this.NIC = null;
      }
      this.getUsers();
    });
  }

  ngOnInit() {

  }
  getUsers() {
    this.patientRecords = [];
    this.userService.getPatientRecords(this.docId, this.patientId).subscribe(success => {
      if (success['rows'].length > 0) {
        for (let i = 0; i < success['rows'].length; i++) {
          this.patientRecords.push(success['rows'][i]);
        }
        console.log(this.patientRecords);
      }
    }, error => {
      this.presentToast('No Records Yet', 2000);
      console.log(error);
    });
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


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getPatientRecordsDetails(recordId) {
    this.router.navigate(['./recordHome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], recordId: recordId } });
  }

  //add patient
  addPatientRecord() {
    this.router.navigate(['./addRecord'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], patient_id: this.patientId, NIC: this.NIC } });

  }

  //delete patient
  async presentConfirm(recordId) {
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
            this.userService.deletePatientRecord(recordId).subscribe(success => {
              this.NIC = '';
              this.getUsers();
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

  back() {
    this.router.navigate(['./dochome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"] } });
  }

}
