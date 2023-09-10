import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectivesPracticesComponent } from './custom-directives-practices.component';

describe('CustomDirectivesPracticesComponent', () => {
  let component: CustomDirectivesPracticesComponent;
  let fixture: ComponentFixture<CustomDirectivesPracticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectivesPracticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectivesPracticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
