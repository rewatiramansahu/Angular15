import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesPracticesComponent } from './custom-pipes-practices.component';

describe('CustomPipesPracticesComponent', () => {
  let component: CustomPipesPracticesComponent;
  let fixture: ComponentFixture<CustomPipesPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipesPracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipesPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
