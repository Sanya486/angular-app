import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneToDoCardComponent } from './done-to-do-card.component';

describe('DoneToDoCardComponent', () => {
  let component: DoneToDoCardComponent;
  let fixture: ComponentFixture<DoneToDoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneToDoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoneToDoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
