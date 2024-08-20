import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Router } from '@angular/router';
import { ResultService } from './result.service';
import { FishResponse } from '../../models/fish.types';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ResultService]
})
export class ResultComponent {
  scoreMin: number | null = null;
  fishList: any[] = [];
  constructor(private resultService: ResultService,private router: Router) { }
  // ngOnInit(): void {
  //   this.resultService.getMinScore().subscribe(
  //     (response: FishResponse) => {
  //       console.log('API Response:', response);
  //       const scoreDataList = response.data; 
  //       this.fishList = [];
  //       scoreDataList.forEach((scoreData: { attributes: { fishguide: { data: any; }; scoreMin: number; }; }) => {
  //         const fishData = scoreData.attributes.fishguide?.data;
  //         if (fishData) {
  //           this.fishList.push({
  //             scoreMin: scoreData.attributes.scoreMin
  //           });
  //           if (this.scoreMin === null || scoreData.attributes.scoreMin < this.scoreMin) {
  //             this.scoreMin = scoreData.attributes.scoreMin; // 最小スコアを更新
  //           }
  //         } 
  //       });
  //     },
  //   );
  // }
  replayQuiz(): void {
    this.router.navigate(['/quiz']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
