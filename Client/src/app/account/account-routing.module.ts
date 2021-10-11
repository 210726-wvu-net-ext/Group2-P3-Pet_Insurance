import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionnaireComponent } from '../pet/questionnaire/questionnaire.component';
import { PlansComponent } from '../pet/plans/plans.component';
import { QuoteComponent } from '../pet/quote/quote.component';
import { PurchaseComponent } from '../pet/purchase/purchase.component';
import { PurchaseStatusComponent } from '../pet/purchase-status/purchase-status.component';

const routes: Routes = [
  {path: '', redirectTo:'questionnaire', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'questionnaire', component: QuestionnaireComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'purchase-status', component: PurchaseStatusComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
