import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataApiComponent } from './post-data-api.component';

describe('PostDataApiComponent', () => {
  let component: PostDataApiComponent;
  let fixture: ComponentFixture<PostDataApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDataApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
