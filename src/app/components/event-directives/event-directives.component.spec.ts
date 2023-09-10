import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDirectivesComponent } from './event-directives.component';

describe('EventDirectivesComponent', () => {
  let component: EventDirectivesComponent;
  let fixture: ComponentFixture<EventDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
