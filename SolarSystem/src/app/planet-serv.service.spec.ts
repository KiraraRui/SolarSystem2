import { TestBed } from '@angular/core/testing';

import { PlanetServService } from './planet-serv.service';

describe('PlanetServService', () => {
  let service: PlanetServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
