import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FishguideComponent } from './pages/fishguide/fishguide.component';
import { HowtoplayComponent } from './pages/howtoplay/howtoplay.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: []},
  { path: 'quiz', component: QuizComponent},
  { path: 'fishguide',component: FishguideComponent},
  { path: 'howtoplay',component: HowtoplayComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







