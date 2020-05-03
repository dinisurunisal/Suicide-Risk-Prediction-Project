import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email;
  password;
  isLoading = false;
  isErrorInPassword = false;
  isErrorInEmail = false;


  constructor(private router: Router,
    private route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService) {
    route.queryParams.subscribe((data: any) => {
      if (data) {
        this.email = data.email;
        this.password = data.password;
      } else {
        this.email = null;
        this.password = null;
      }
    });
  }

  ngOnInit() { }
  signup() {
    this.router.navigate(['./signup']);
  }

  async signin() {
    this.isErrorInEmail = false;
    this.isErrorInPassword = false;
    this.isLoading = true;
    await this.userService.login(this.email, this.password).subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      localStorage.setItem('token', data['token']);
      this.isLoading = false;
      while (true) {
        if (localStorage.getItem('token') === data['token']) {
          this.router.navigate(['./dochome']);
          break;
        }
      }
    }, error => {
      this.presentToast('Invalid Credentials!', 2000);
      this.isLoading = false;
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

  forgetPassword() {
    this.router.navigate(['./forgotPassword']);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
