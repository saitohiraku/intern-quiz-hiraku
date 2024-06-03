import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { FishguideComponent } from './pages/fishguide/fishguide.component';
import { HowtoplayComponent } from './pages/howtoplay/howtoplay.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SignupComponent } from './pages/signup/signup.component';
export const routes: Routes = [
    { path: '',component: HomeComponent,},
    { path: 'quiz', component: QuizComponent},
    { path: 'fishguide',component: FishguideComponent},
    { path: 'howtoplay',component: HowtoplayComponent},
    { path: 'logout',component: LogoutComponent},
    { path: 'setting',component: LoginComponent},
    { path: 'signup',component: SignupComponent}
];
