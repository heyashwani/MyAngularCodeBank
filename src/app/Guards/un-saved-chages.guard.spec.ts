import { TestBed, async, inject } from '@angular/core/testing';

import { UnSavedChagesGuard } from './un-saved-chages.guard';

describe('UnSavedChagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnSavedChagesGuard]
    });
  });

  it('should ...', inject([UnSavedChagesGuard], (guard: UnSavedChagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
