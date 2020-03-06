import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { ApplicanthistoryComponent } from './applicanthistory/applicanthistory.component';
import { FieldverificationstatusComponent } from './fieldverificationstatus/fieldverificationstatus.component';
import { DocverificationlistComponent } from './docverificationlist/docverificationlist.component';
import { FoecaseallocationlistComponent } from './foecaseallocationlist/foecaseallocationlist.component';
import { UnallocatedcasesComponent } from './unallocatedcases/unallocatedcases.component';
import { InactivecasesComponent } from './inactivecases/inactivecases.component';
import { IncasesComponent } from './incases/incases.component';
import { OutcasesComponent } from './outcases/outcases.component';
import { RejectedcasesComponent } from './rejectedcases/rejectedcases.component';
import { GenerateexcelComponent } from './generateexcel/generateexcel.component';
import { MasterexportComponent } from './masterexport/masterexport.component';
import { ClosecasedownloadComponent } from './closecasedownload/closecasedownload.component';
import { CasetraceComponent } from './casetrace/casetrace.component';
import { PanComponent } from './pan/pan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    DashboardComponent,
    ApplicantlistComponent,
    NewapplicantComponent,
    ApplicanthistoryComponent,
    FieldverificationstatusComponent,
    DocverificationlistComponent,
    FoecaseallocationlistComponent,
    UnallocatedcasesComponent,
    InactivecasesComponent,
    IncasesComponent,
    OutcasesComponent,
    RejectedcasesComponent,
    GenerateexcelComponent,
    MasterexportComponent,
    ClosecasedownloadComponent,
    CasetraceComponent,
    PanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
