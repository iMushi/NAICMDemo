import { TestBed, inject } from '@angular/core/testing';

import { PrestoService } from './presto.service';

describe('PrestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestoService]
    });
  });

  it('should be created', inject([PrestoService], (service: PrestoService) => {
    expect(service).toBeTruthy();
  }));
});
