import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPracticeComponent } from './services-practice.component';

describe('ServicesPracticeComponent', () => {
  let component: ServicesPracticeComponent;
  let fixture: ComponentFixture<ServicesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
