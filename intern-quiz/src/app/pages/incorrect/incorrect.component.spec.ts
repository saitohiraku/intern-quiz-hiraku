import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectComponent } from './incorrect.component';

describe('IncorrectComponent', () => {
  let component: IncorrectComponent;
  let fixture: ComponentFixture<IncorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncorrectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
