import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { LoginGuardService } from '../login/login-guard.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BookComponent,
    children:[
        {path: 'dashboard', component: DashboardComponent},
        {path: 'detail/:id', component: BookDetailComponent},
    ],
    canActivate: [LoginGuardService],
  },
];

@NgModule({
    imports: [RouterModule.forChild(bookRoutes)],
    exports: [RouterModule]
})
export class BookRoutingModule {}
