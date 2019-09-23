import { TestBed } from '@angular/core/testing';

import { BudgetPostService } from './budget-post.service';

describe('BudgetPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetPostService = TestBed.get(BudgetPostService);
    expect(service).toBeTruthy();
  });
});
