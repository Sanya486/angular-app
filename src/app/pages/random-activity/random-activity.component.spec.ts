import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomActivityComponent } from './random-activity.component';

describe('RandomActivityComponent', () => {
  let component: RandomActivityComponent;
  let fixture: ComponentFixture<RandomActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
