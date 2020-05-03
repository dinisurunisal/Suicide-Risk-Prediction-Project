import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import 'gl-ionic-background-video';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupComponent
      }
    ])
  ],
  declarations: [SignupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule { }
