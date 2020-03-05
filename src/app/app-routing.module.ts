import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicanthistoryComponent } from './applicanthistory/applicanthistory.component';
import { ApplicantlistComponent } from './applicantlist/applicantlist.component';
import { CasetraceComponent } from './casetrace/casetrace.component';
import { ClosecasedownloadComponent } from './closecasedownload/closecasedownload.component';
import { DocverificationlistComponent } from './docverificationlist/docverificationlist.component';
import { FieldverificationstatusComponent } from './fieldverificationstatus/fieldverificationstatus.component';
import { FoecaseallocationlistComponent } from './foecaseallocationlist/foecaseallocationlist.component';
import { GenerateexcelComponent } from './generateexcel/generateexcel.component';
import { InactivecasesComponent } from './inactivecases/inactivecases.component';
import { IncasesComponent } from './incases/incases.component';
import { OutcasesComponent } from './outcases/outcases.component';
import { MasterexportComponent } from './masterexport/masterexport.component';
import { NewapplicantComponent } from './newapplicant/newapplicant.component';
import { PanComponent } from './pan/pan.component';
import { RejectedcasesComponent } from './rejectedcases/rejectedcases.component';
import { UnallocatedcasesComponent } from './unallocatedcases/unallocatedcases.component';


const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'applicanthistory', component:ApplicanthistoryComponent},
  {path:'applicantlist', component:ApplicantlistComponent},
  {path:'casetrace', component:CasetraceComponent},
  {path:'closecasedownload', component:ClosecasedownloadComponent},
  {path:'docverificationlist', component:DocverificationlistComponent},
  {path:'fieldverificationstatus', component:FieldverificationstatusComponent},
  {path:'foecaseallocationlist', component:FoecaseallocationlistComponent},
  {path:'generateexcel', component:GenerateexcelComponent},
  {path:'inactivecase', component:InactivecasesComponent},
  {path:'incase', component:IncasesComponent},
  {path:'outcase', component:OutcasesComponent},
  {path:'masterexport', component:MasterexportComponent},
  {path:'newapplicant', component:NewapplicantComponent},
  {path:'pan', component:PanComponent},
  {path:'rejectedcase', component:RejectedcasesComponent},
  {path:'unallocatedcase', component:UnallocatedcasesComponent},
  {path:'navbar', component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
