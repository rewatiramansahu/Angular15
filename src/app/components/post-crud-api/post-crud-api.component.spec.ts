import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCrudApiComponent } from './post-crud-api.component';

describe('PostCrudApiComponent', () => {
  let component: PostCrudApiComponent;
  let fixture: ComponentFixture<PostCrudApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCrudApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCrudApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
