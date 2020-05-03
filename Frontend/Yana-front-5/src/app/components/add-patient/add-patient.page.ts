import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
  docId;
  patientId;
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
        this.docId = data.doc_id;
        this.patientId = data.patient_id;
        this.NIC = data.NIC;
      } else {
        this.docId = null;
        this.patientId = null;
        this.NIC = null;
      }
    });
  }

  ngOnInit() {
    console.log(this.patientId);
    console.log(this.NIC);
    console.log(this.docId);
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

  addpatientRecord(form: any) {
    const record = form.value;
    this.userService.addPatientRecord(
      this.NIC,
      record.Age,
      record.Religion,
      record.Race,
      record.Gender,
      record.Nature_Of_Occupation,
      record.Civil_Status,
      record.Education_Level,
      record.Reason,
      record.Lifetime_Psychiatric_Hospitalizations,
      record.Past_Suicide_Attempts,
      record.Any_suicidal_thoughts_mentioned,
      record.Self_Injurious_Behaviour,
      record.Psychiatric_Disorders,
      record.Past_Illnesses,
      record.Alcohol_drug_Consumption,
      record.Anger,
      record.Sleep_Problem,
      record.Social_Iscolation,
      record.Sad_Weary,
      record.Humilated,
      this.patientId,
      this.docId
    ).subscribe(data => {
      console.log('Sending data')
      this.presentToast('Successfully record added', 4000).then(() => {
        this.router.navigate(['./result-home'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"] } });
      });
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 401) {
        this.presentToast('ERROR', 2000);
      } else {
        console.log(error);
        this.presentToast('ERROR', 2000);
      }

    });
  }
  // back() {
  //   this.router.navigate(['./patientHome'], { queryParams: { doc_id: this.getDecodedAccessToken(localStorage.getItem('token'))["user_id"], patient_id: this.patientId, NIC: this.NIC } });
  // }

}


