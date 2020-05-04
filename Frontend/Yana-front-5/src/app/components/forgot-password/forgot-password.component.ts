import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email = '';
  token = '';
  emailSuccess = false;
  tokenSuccess = false;
  enteredForgotpage = true;
  password = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService) { }

  ngOnInit() { }

  login() {
    this.router.navigate(['./signin']);
  }
  sendEmail() {
    this.userService.forgetPassword(this.email).subscribe(data => {
      this.presentToast('Successfully send the mail', 2000);
      this.emailSuccess = true;
      this.enteredForgotpage = false;
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 404) {
        this.presentToast('Error Connecting to Server', 2000);
        // tslint:disable-next-line:no-string-literal
      } else if (error['status'] === 401) {
        this.presentToast('Invalid Email address!', 2000);
      }
    });
  }

  checkToken() {
    this.userService.forgetPasswordTokenSending(this.email, this.token).subscribe(data => {
      this.presentToast('Token varification successful', 2000);
      this.tokenSuccess = true;
      this.emailSuccess = false;
      this.enteredForgotpage = false;

      //  this.router.navigate(['./signin'], { queryParams: {} });
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 404) {
        this.presentToast('Error Connecting to Server', 2000);
        // tslint:disable-next-line:no-string-literal
      } else if (error['status'] === 401) {
        this.presentToast('Invalid Token', 2000);

      }
    });
  }

  newPassword() {
    this.userService.forgotNewPassword(this.email, this.password).subscribe(data => {
      this.presentToast('Successfully updated the password', 2000);
      this.router.navigate(['./signin']);
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 404) {
        this.presentToast('Error Connecting to Server', 2000);
        // tslint:disable-next-line:no-string-literal
      } else if (error['status'] === 401) {
        this.presentToast('Invalid', 2000);
        this.router.navigate(['./forgotPassword']);
      }
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
}
