import { TestBed, async, inject } from '@angular/core/testing';

import { CanWeLoadGuard } from './can-we-load.guard';

describe('CanWeLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanWeLoadGuard]
    });
  });

  it('should ...', inject([CanWeLoadGuard], (guard: CanWeLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
