import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'register', component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
