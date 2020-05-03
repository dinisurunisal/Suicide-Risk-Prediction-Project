import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-result-home',
  templateUrl: './result-home.page.html',
  styleUrls: ['./result-home.page.scss'],
})
export class ResultHomePage implements OnInit {
  docId;
  patientId;
  patientRecordDetails = [];
  recordId;
  NIC;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    private userService: UserService) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        this.recordId = data.recordId;
      } else {
        this.recordId = null
      }
    });
  }


  ngOnInit() {
    console.log(this.recordId);
    this.userService.getResult().subscribe(success => {
      if (success['rows'].length > 0) {
        for (let i = 0; i < success['rows'].length; i++) {
          this.patientRecordDetails.push(success['rows'][i]);
        }
        console.log(this.patientRecordDetails);
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
  back(patientID, NIC) {
    this.router.navigate(['./dochome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], patient_id: patientID, NIC: NIC } });
  }
}
