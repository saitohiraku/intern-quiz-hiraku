import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent,
            RouterModule,
            AppRoutingModule
            ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  public goToQuiz() {
    this.router.navigateByUrl("quiz");
  }
  goFishguide(){
    this.router.navigateByUrl("fishguide");
}
goTohowtoplay(){
  this.router.navigateByUrl("howtoplay");
}
goTologout(){
  this.router.navigateByUrl("logout");
}
}