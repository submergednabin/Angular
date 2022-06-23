import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponentComponent } from './component/book-ride-component/book-ride-component.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"book-ride",
    component: BookRideComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
