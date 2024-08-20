import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from "./pages/home/home.component";
import { QuizComponent } from './pages/quiz/quiz.component';
import { FishguideComponent } from './pages/fishguide/fishguide.component';
import { HowtoplayComponent } from './pages/howtoplay/howtoplay.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { QuizModule } from './pages/quiz/quiz.module';
import { SignupComponent } from "./pages/signup/signup.component";
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './pages/start/start.component';
import { ResultComponent } from './pages/result/result.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { IncorrectComponent } from './pages/incorrect/incorrect.component';
@Component({
    selector: 'app-root',
    template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
      <router-outlet />
    </nav>
  `,
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        ToolbarComponent,
        HomeComponent,
        QuizComponent,
        FishguideComponent,
        HowtoplayComponent,
        RouterModule,
        AppRoutingModule,
        QuizModule, 
        SignupComponent, 
        LoginComponent,
        HttpClientModule,
        StartComponent,
        ResultComponent,
        ReactiveFormsModule,
        IncorrectComponent
      ],
})
export class AppComponent {
  title = 'intern-quiz';
}
