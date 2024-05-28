import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { FishguideComponent } from './fishguide/fishguide.component';
import { HowtoplayComponent } from './howtoplay/howtoplay.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: []},
  { path: 'quiz', component: QuizComponent},
  { path: 'fishguide',component: FishguideComponent},
  { path: 'howtoplay',component: HowtoplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







