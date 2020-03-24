import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'register',
    loadChildren: () => import('./home/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'patent-register',
    loadChildren: () => import('./home/patent-register/patent-register.module').then( m => m.PatentRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
