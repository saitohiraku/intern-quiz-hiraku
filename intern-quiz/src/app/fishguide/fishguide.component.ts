import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Component({
  standalone: true,
  imports: [CommonModule,
            ToolbarComponent
          ],
  selector: 'app-fishguide',
  templateUrl: './fishguide.component.html',
  styleUrls: ['./fishguide.component.css']
})
export class FishguideComponent {
  fishList = [
    { name: 'フサフサヒレナガチョウチンアンコウ', image: '/assets/husahire.jpeg' },
    { name: '????', image: '/assets/1327-600x600.jpg' },
    { name: '????', image: '/assets/1327-600x600.jpg' },

  ];

  onScroll() {

  }
}
