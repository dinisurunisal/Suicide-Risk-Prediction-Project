import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' },
  { path: 'signin', loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup', loadChildren: () => import('./components/signUp/signup.module').then(m => m.SignupModule) },
  {
    path: 'forgotPassword', loadChildren: () => import('./components/forgot-password/forgot-password.module').
      then(m => m.ForgotPasswordModule)
  },
  { path: 'dochome', loadChildren: () => import('./components/doc-home/doc-home.module').then(m => m.DocHomeModule) },
  { path: 'patientHome', loadChildren: () => import('./components/patient-home/patient-home.module').then(m => m.PatientHomeModule) },
  { path: 'recordHome', loadChildren: () => import('./components/record-home/record-home.module').then(m => m.RecordHomeModule) },
  { path: 'addRecord', loadChildren: () => import('./components/add-patient/add-patient.module').then(m => m.AddPatientPageModule) },
  { path: 'result-home', loadChildren: () => import('./components/result-home/result-home.module').then(m => m.ResultHomePageModule) },
  { path: 'welcome', loadChildren: () => import('./components/welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'firstpage', loadChildren: () => import('./components/first-page/first-page.module').then(m => m.FirstPagePageModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
