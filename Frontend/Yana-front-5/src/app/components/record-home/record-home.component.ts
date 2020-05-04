import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-record-home',
  templateUrl: './record-home.component.html',
  styleUrls: ['./record-home.component.scss'],
})
export class RecordHomeComponent implements OnInit {
  docId;
  patientId;
  patientRecordDetails = [];
  searchKeyword = '';
  recordId;
  isSearchBarOpened = false;


  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        this.docId = data.doc_id;
        this.recordId = data.recordId;
      } else {
        this.docId = null;
        this.recordId = null;
      }
    });
  }

  ngOnInit() {
    this.userService.getPatientRecordsDetails(this.recordId).subscribe(success => {
      if (success['rows'].length > 0) {
        for (let i = 0; i < success['rows'].length; i++) {
          this.patientRecordDetails.push(success['rows'][i]);
        }
        console.log(this.patientRecordDetails);
      }
    }, error => {
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

  back(patientID, NIC) {
    this.router.navigate(['./patientHome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], patient_id: patientID, NIC: NIC } });
  }
}

