import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
import 'gl-ionic-background-video';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SigninComponent
      }
    ])
  ],
  declarations: [SigninComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SigninModule { }
