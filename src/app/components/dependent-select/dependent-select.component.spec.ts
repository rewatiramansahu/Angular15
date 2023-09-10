import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentSelectComponent } from './dependent-select.component';

describe('DependentSelectComponent', () => {
  let component: DependentSelectComponent;
  let fixture: ComponentFixture<DependentSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
