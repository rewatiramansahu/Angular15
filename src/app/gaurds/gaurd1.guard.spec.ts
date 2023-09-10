import { TestBed } from '@angular/core/testing';

import { Gaurd1Guard } from './gaurd1.guard';

describe('Gaurd1Guard', () => {
  let guard: Gaurd1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Gaurd1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
