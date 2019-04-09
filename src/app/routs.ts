import { SurveyComponent } from './survey/survey.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';


export const appRouter: Routes = [

  {path: 'register', component: RegisterComponent},
  {path: 'survey', component: SurveyComponent},
  {path: 'result', component: ResultComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'}

]
