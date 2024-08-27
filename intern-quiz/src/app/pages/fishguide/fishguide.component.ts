import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { FishGuideService } from './fish-guide.service'; 
import { FishResponse } from '../../models/fish.types'; 

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ToolbarComponent
  ],
  selector: 'app-fishguide',
  templateUrl: './fishguide.component.html',
  styleUrls: ['./fishguide.component.css'],
  providers: [FishGuideService]
})
export class FishguideComponent implements OnInit {
  fishList: any[] = [];
  achieved : number = 0; 
  constructor(private fishService: FishGuideService) { }

  ngOnInit(): void {
    this.fishService.getMyScores().subscribe(
      (response: FishResponse) => {
        console.log('API Response:', response);
        const scoreDataList = response.data; 
        console.log('数字',scoreDataList.length)
        this.achieved = (scoreDataList.length);
        this.fishList = [];
        scoreDataList.forEach((scoreData: { attributes: { fishguide: { data: any; }; scoreMin: any; }; }) => {
          const fishData = scoreData.attributes.fishguide?.data;
          if (fishData) {
            this.fishList.push({
              name: fishData.attributes.fishName,
              picture: fishData.attributes.fishPictureUrl,
              scoreMin: scoreData.attributes.scoreMin,
            });
          } 
        });

      },
    );
  }
  

  onScroll() {
  
  }
}
