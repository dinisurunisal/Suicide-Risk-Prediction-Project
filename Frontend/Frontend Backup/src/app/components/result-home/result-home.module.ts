import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultHomePageRoutingModule } from './result-home-routing.module';

import { ResultHomePage } from './result-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultHomePageRoutingModule
  ],
  declarations: [ResultHomePage]
})
export class ResultHomePageModule {}
