import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirectiveDirective } from './directives/color-directive.directive';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SortPipe } from './customerPipe/sort.pipe';
import { SortComponent } from './pipe-component/sort/sort.component';
import { CustomFormsComponent } from './component/custom-forms/custom-forms.component';
import { BookDesignComponent } from './component/book-design/book-design.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateFormStyleComponent } from './component/template-form-style/template-form-style.component';
import { CoursesListComponent } from './nestedComponent/courses-list/courses-list.component';
import { FormComponent } from './registration-form/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirectiveDirective,
    RegistrationFormComponent,
    PageNotFoundComponent,
    LoginComponent,
    SortPipe,
    SortComponent,
    CustomFormsComponent,
    BookDesignComponent,
    TemplateFormStyleComponent,
    CoursesListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
