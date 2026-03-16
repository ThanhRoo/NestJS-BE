import { Test, TestingModule } from '@nestjs/testing';
import { AirecommendationService } from './airecommendation.service';

describe('AirecommendationService', () => {
  let service: AirecommendationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirecommendationService],
    }).compile();

    service = module.get<AirecommendationService>(AirecommendationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
