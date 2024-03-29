import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { BookDesignComponent } from './component/book-design/book-design.component';
import { CustomFormsComponent } from './component/custom-forms/custom-forms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardService } from './login/login-guard.service';
import { LoginComponent } from './login/login.component';
import { CoursesListComponent } from './nestedComponent/courses-list/courses-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SortComponent } from './pipe-component/sort/sort.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: '/login' },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'books/detail/:id', component: BookDetailComponent },
  { path: 'allBooks', component: BookDesignComponent },

  { path: 'sort', component: SortComponent },
  { path: 'custom-form', component: CustomFormsComponent },
  { path: 'nested', component: CoursesListComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
