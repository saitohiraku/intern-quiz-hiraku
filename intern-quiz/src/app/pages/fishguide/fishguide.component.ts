import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { FishGuideService } from '../../service/fish-guide.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  standalone: true,
  imports: [CommonModule,
            ToolbarComponent,
            HttpClientModule
          ],
  selector: 'app-fishguide',
  templateUrl: './fishguide.component.html',
  styleUrls: ['./fishguide.component.css'],
  providers: [FishGuideService]
})
export class FishguideComponent implements OnInit {
  fishList: any[] = [];
  fishName: any[] = [];
  fishPhoto: any[] = [];

  constructor(private fishguideservice: FishGuideService) { }
  
  ngOnInit(): void {
    this.fishguideservice.getFishes().subscribe(
      (data: any[]) => { 
        this.fishList = data; 
      },
      (error: any) => {
        console.error('Error fetching fish data', error);
      }
    );
  }
  onscroll(){

  }
}
