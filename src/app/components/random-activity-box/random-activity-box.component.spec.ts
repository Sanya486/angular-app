import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomActivityBoxComponent } from './random-activity-box.component';

describe('RandomActivityBoxComponent', () => {
  let component: RandomActivityBoxComponent;
  let fixture: ComponentFixture<RandomActivityBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomActivityBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomActivityBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
