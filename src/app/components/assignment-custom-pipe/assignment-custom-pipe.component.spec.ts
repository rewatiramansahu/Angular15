import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCustomPipeComponent } from './assignment-custom-pipe.component';

describe('AssignmentCustomPipeComponent', () => {
  let component: AssignmentCustomPipeComponent;
  let fixture: ComponentFixture<AssignmentCustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentCustomPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
