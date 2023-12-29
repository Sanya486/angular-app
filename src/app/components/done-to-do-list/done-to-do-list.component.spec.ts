import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneToDoListComponent } from './done-to-do-list.component';

describe('DoneToDoListComponent', () => {
  let component: DoneToDoListComponent;
  let fixture: ComponentFixture<DoneToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoneToDoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoneToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
