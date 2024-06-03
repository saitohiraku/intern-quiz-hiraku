import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishguideComponent } from './fishguide.component';

describe('FishguideComponent', () => {
  let component: FishguideComponent;
  let fixture: ComponentFixture<FishguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FishguideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FishguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
