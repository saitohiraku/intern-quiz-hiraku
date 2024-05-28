import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { FishguideComponent } from './fishguide/fishguide.component';
import { HowtoplayComponent } from './howtoplay/howtoplay.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
    { path: '',component: HomeComponent,},
    { path: 'quiz', component: QuizComponent},
    { path: 'fishguide',component: FishguideComponent},
    { path: 'howtoplay',component: HowtoplayComponent},
    { path: 'logout',component: LogoutComponent},
    { path: 'setting',component: LoginComponent},
    { path: 'signup',component: SignupComponent}
];
