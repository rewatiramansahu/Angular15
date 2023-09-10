import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipesPracticesComponent } from './impure-pipes-practices.component';

describe('ImpurePipesPracticesComponent', () => {
  let component: ImpurePipesPracticesComponent;
  let fixture: ComponentFixture<ImpurePipesPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpurePipesPracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpurePipesPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
