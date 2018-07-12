import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      EmployeeListComponent,
      EmployeeAddComponent,
      EmployeeEditComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          { path: 'home', component: HomeComponent },
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'employee-list', component: EmployeeListComponent },
          { path: 'employee-add', component: EmployeeAddComponent },
          { path: 'employee-edit/:id', component: EmployeeEditComponent },
          
      ]),
      FormsModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
