import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
{ path: '', component: QuizComponent,
children:[ 
    {
        path:'quiz', 
        component:QuizComponent
    }
]
}];
@NgModule({
declarations: [],
imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
]
})
export class QuizModule { 
}
